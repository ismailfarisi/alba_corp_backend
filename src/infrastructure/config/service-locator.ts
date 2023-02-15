import BlogPostRepository from "../../domain/repositories/BlogPostRepository";
import Serializer from "../../interfaces/serializers/Serializer";
import BlogPostSerializer from "../../interfaces/serializers/BlogPostSerializer";
import BlogPostRepositoryImpl from "../repositories/json_file/BlogPostRepositoryImpl";
import JwtAccessTokenManager from "../security/JwtAccessTokenManager";
import ImageCompressManagerImpl from "../services/ImageCompressManager"

export type ServiceLocator = {
   
  
    blogPostSerializer: Serializer,
    accessTokenManager :  JwtAccessTokenManager
    blogPostRepository: BlogPostRepository,
    imageCompressManager: ImageCompressManagerImpl,
  
  };
  function buildBeans() {
    const beans: ServiceLocator = {
        blogPostSerializer: new BlogPostSerializer(),
        blogPostRepository : new BlogPostRepositoryImpl(),
        accessTokenManager : new JwtAccessTokenManager(),
        imageCompressManager:new ImageCompressManagerImpl(),
        
    };
  
  
    return beans;
  }
  
  export default buildBeans();