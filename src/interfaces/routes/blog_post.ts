import { Router } from 'express';
import BlogPostController from '../controllers/BlogPostController';
import UploadMiddlewares from '../middlewares/UploadMiddlewares';


const router = Router();

router.get('/', BlogPostController.GetAllBlogPosts);
router.post('/',UploadMiddlewares ,BlogPostController.CreateBlogPost);

export default router;