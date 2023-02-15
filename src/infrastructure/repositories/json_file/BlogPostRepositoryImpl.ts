import BlogPost from "../../../domain/entities/BlogPost";
import { ID } from "../../../domain/entities/Entity";
import BlogPostRepository from "../../../domain/repositories/BlogPostRepository";
import JsonDB from "../../orm/json_file/json_file"

export default class BlogPostRepositoryImpl implements BlogPostRepository{
    
    create(domainEntity: BlogPost): Promise<BlogPost | null> {
        return JsonDB.createBlogPost(domainEntity);
    }
    
   
    getAll(): Promise<BlogPost[]>  {
     return  JsonDB.listBlogs()
    }
}