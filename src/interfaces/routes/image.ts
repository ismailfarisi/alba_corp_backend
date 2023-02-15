import { Router } from 'express';
import ImageController from '../controllers/ImageController';
import AuthenticationMiddleware from '../middlewares/AuthenticationMiddleware';


const router = Router();

router.get('/generate_token', ImageController.generateImageToken);
router.get('/get_image',AuthenticationMiddleware(),ImageController.getImage);

export default router;