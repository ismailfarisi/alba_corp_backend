import {Router } from 'express';
import BlogPostRoutes from '../../../interfaces/routes/blog_post';
import ImageRoutes from '../../../interfaces/routes/image';
const router = Router();

router.use("/blogpost",BlogPostRoutes);
router.use("/image",ImageRoutes);

export default router;