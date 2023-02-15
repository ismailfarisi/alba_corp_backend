import { ID } from './src/domain/entities/Entity';
import { ServiceLocator } from './src/infrastructure/config/service-locator';
declare global {
   namespace Express {
      interface Request {
         serviceLocator?: ServiceLocator;
         blogPostId?: ID;
         expired? :boolean;
         accessToken? : string
      }
   }
}