import tmp from "tmp";
import fs from 'fs';
import path from 'path';


export default async(image:string)=>{
    const ext = path.extname(image);
    tmp.file({prefix: 'Alba', postfix: ext, keep: true}, function (err, path, fd, cleanupCallback) {
        if (err) throw err;
    
        console.log("File: ", path);
        console.log("Filedescriptor: ", fd);
        fs.cp(`./images/${image}`,path,(err)=>{
            if(err){
                console.log("error occured in creating tmp file" +err);
                
            }
        })
    });
}