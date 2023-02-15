import BlogPost from "../entities/BlogPost";
import {ID} from "../entities/Entity";

export default interface BlogPostRepository {
    create(domainEntity: BlogPost): Promise<BlogPost | null>;

    

    getAll(): Promise<BlogPost[]>;
}