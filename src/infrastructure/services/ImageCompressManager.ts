import sharp from "sharp";
import ImageCompressManager from "../../application/services/ImageCompressManager";
import path  from "path";


export default class ImageCompressManagerImpl implements ImageCompressManager{
   async compress(images: {filename:string,buffer:Buffer}[]): Promise<string> {
    for (let index = 0; index < images.length; index++) {
        const buffer = images[index]["buffer"];
        const filename = images[index]["filename"];
        console.log("dddddddddd"+filename );
        if(path.extname(filename) == ".png"){
         await sharp("./images"+filename).png({quality:70});
        }else if(path.extname(filename) == ".jpg"){
            await sharp(buffer).jpeg({quality:70});
        }
        
    }
     
    
        return "";

    }
   
}