import multer from 'multer';
import path from'path';
import { Request, Response, NextFunction } from 'express';

const dest = "./images";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, dest)
    },
    filename: function (req, file, cb) {
        const fileType = path.extname(file.originalname ?? "");
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.filename+'-'+req.body.date_time+ fileType)
    }
  })
  const upload = multer({storage:storage,limits:{fileSize:1000000},fileFilter: function (req, file, cb) {
            var acceptedExt = ['.png','.jpg','.gif','.bmp'];
            if ( acceptedExt.indexOf(path.extname(file.originalname))=== -1) {
                return cb(new Error('Image type not allowed: ' + path.extname(file.originalname)));
            }
            if( file.size > 1000000){
              return cb(new Error('Image size exceeded 1 mb'));
            }

            cb(null, true)
        }})


 const uploadMiddleware = upload.fields([{ name: 'main_image', maxCount: 1 },
  { name: 'additional_images', maxCount: 5 }]);


export default uploadMiddleware;



 


