import { ID } from '../../../domain/entities/Entity';
import { ServiceLocator } from '../../../infrastructure/config/service-locator';

// export default async (blogPostId: ID, { blogPostRepository }: ServiceLocator) => {
//   const blogPost = await blogPostRepository.get(blogPostId);
//   if (!blogPost) {
//     throw new Error('Invalid blogPost');
//   }
//   return blogPost;
// };