import { Request, Response } from 'express';
import { ValidationError } from 'joi';
import ListBlogPost from '../../application/use_cases/blog_post/ListBlogPosts';
import CreateBlogPost from '../../application/use_cases/blog_post/CreateBlogPost';
import { ServiceLocator } from '../../infrastructure/config/service-locator';
import BlogPost from '../../domain/entities/BlogPost';
import { isMap } from 'util/types';

export default {

  async GetAllBlogPosts(request: Request, response: Response) {

    // Context
    const serviceLocator: ServiceLocator = request.serviceLocator!;

    // Treatment
    const blogPosts = await ListBlogPost(serviceLocator);

    blogPosts.forEach((blog) => { console.log(blog) })

    // Output
    const output = blogPosts
      .map((blogPost: BlogPost) => serviceLocator.blogPostSerializer.serialize(blogPost, serviceLocator));
    return response.json(output);
  },


  async CreateBlogPost(request: Request, response: Response) {
    // Context
    const serviceLocator: ServiceLocator = request.serviceLocator!;

    // Input
    let data = request.body;
    let f :{filename:string,buffer:Buffer}[]= [];
    let files: {
      [fieldname: string]: Express.Multer.File[];
    } | undefined = request.files as {
      [fieldname: string]: Express.Multer.File[];
    } | undefined;

    let main_image: string|null = null;
    if(files ){
      const imagefile = files["main_image"][0];
      main_image = imagefile.filename;
      f.concat({
        filename:imagefile.filename,
        buffer:imagefile.buffer,
        
      })
    }

    let additional_images: string[] | null = null;
    if (files && files["additional_images"].length != 0) {
      additional_images = files["additional_images"].map((data)=> {
        f.concat({
          buffer:data.buffer,
          filename:data.filename
        });
        return data.filename;});
    }


    data = {
      title: data.title,
      description: data.description,
      main_image: main_image,
      additional_images: additional_images,
      date_time: data.date_time
    };

    // Treatment
    let blogPost = null;
    let error = null;

    try {
    

      blogPost = await CreateBlogPost(data, serviceLocator,f);
    } catch (err: unknown) {
      if (err instanceof ValidationError) {
        error = err.details[0].message;
      } else if (err instanceof Error) {
        // 'Error occurred while creating user'
        error = err.message;
      }
    }

    // Output
    if (!blogPost) {
      return response.status(400).json({ message: error });
    }
    const output = serviceLocator.blogPostSerializer.serialize(blogPost, serviceLocator);
    return response.status(201).json(output);
  },


};