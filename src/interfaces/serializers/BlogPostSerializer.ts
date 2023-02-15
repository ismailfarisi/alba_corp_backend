import BlogPost from "../../domain/entities/BlogPost";
import { ServiceLocator } from "../../infrastructure/config/service-locator";
import Serializer from "./Serializer";

export default class BlogPostSerializer extends Serializer {
  _serializeSingleEntity(entity: BlogPost, serviceLocator: ServiceLocator): object {
    const date =new Date(entity.dateTime!).toISOString()
    const blogPost = {
      'id': entity.id,
      'title': entity.title,
      'title_slug' :entity.title.trim().toLowerCase().replace(/ /g,"_"),
      'description': entity.description,
      'main_image': entity.mainImage,
      'additional_images': entity.additionalImages ? entity.additionalImages :undefined,
      'date_time':date ,
    };
    return blogPost;
  }
};