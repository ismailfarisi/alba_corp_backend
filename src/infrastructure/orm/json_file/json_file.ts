import fs from 'fs/promises';
import data from '../../../../db/blogs.json';
import BlogPost from '../../../domain/entities/BlogPost';
import BlogPostSTO from '../../stos/BlogPostSTO';
import { ID } from '../../../domain/entities/Entity';
import { number } from 'joi';


const _path = './db/blogs.json';

export default {
     async listBlogs() : Promise<BlogPost[]>   {
       
        const rawData = await fs.readFile(_path,"utf-8");
        const json = JSON.parse(rawData) as Array<any>;
        console.log(json)
        const blogs = json.map((data: any) => {return BlogPostSTO(data); 
        });
        const filtered :BlogPost[]= blogs.filter((data)=> data!= null) as BlogPost[];
        return filtered;
    },

    async getBlog(blogPostId : ID) : Promise<BlogPost | null>   {
        console.log("id "+blogPostId);
        const rawData = await fs.readFile(_path, { encoding: "utf-8" });
        const json = JSON.parse(rawData) as Array<any>;
        const blogJson = json.find((data: any) => { 
            
            return parseInt(data.reference) == blogPostId });
            if(blogJson){
        const blog =  BlogPostSTO(blogJson);
        console.log(blog);
        return blog;
            }
            return null;
    },

    async createBlogPost(blogPost:BlogPost ):Promise<BlogPost|null>{
        try {
            const d = data as Array<any>;
            
            const length = data.length;
            const id =parseInt( data[length -1].reference )+ 1;
            console.log(id);
            const blog = {
                reference:id.toString().padStart(4,"0"),
                title : blogPost.title,
                description : blogPost.description,
                main_image:blogPost.mainImage,
                additional_images:blogPost.additionalImages,
                date_time:Date.now()
             } ;
             console.log(blog);
            const writeData = data.concat(blog);
            await fs.writeFile(_path,JSON.stringify(writeData))
            return BlogPostSTO(blog);
        } catch (error) {
            console.log(error);
            return null;
        }
       

    }
}



