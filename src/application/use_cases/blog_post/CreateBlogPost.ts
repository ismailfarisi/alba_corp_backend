import BlogPost from '../../../domain/entities/BlogPost';
import BlogPostValidator from '../../../domain/validators/BlogPostValidator';
import { ServiceLocator } from '../../../infrastructure/config/service-locator';

export default async (blogPostData: any, { blogPostRepository,imageCompressManager }: ServiceLocator,imageBuffers? : {filename:string,buffer:Buffer}[],) => {
  if(imageBuffers){
  const imageUrl =await imageCompressManager.compress(imageBuffers);
  }
  // blogPostData.main_image = imageUrl;
  await BlogPostValidator.tailor('create').validateAsync(blogPostData);
  const blogPost = new BlogPost({
    title: blogPostData.title,
    description: blogPostData.description,
    mainImage: blogPostData.main_image,
    additionalImages: blogPostData.additional_images,
  });
  return blogPostRepository!.create(blogPost);
};