
import { Request, Response } from 'express';
import GetAccessToken from '../../application/use_cases/image/GenerateToken';
import VerifyToken from '../../application/use_cases/image/VerifyToken';

export default {
    async generateImageToken(request: Request, response: Response){
        const serviceLocator = request.serviceLocator!;

    // Input
    const image = request.body.image;
    const timestamp = Date.now() + 1000 * 60*5;

    // Treatment
    let accessToken;
    try {
       accessToken = await GetAccessToken({image:image,date:timestamp}, serviceLocator);
    } catch (err) {
      console.log(err);
    }
    // Output
    if (!accessToken) {
      return response.status(401).json({ 'message': 'something went wrong' });
    }
    const output = {
        "acsess_token":accessToken
    };
    return response.json(output);
  },
    
    async getImage(request: Request, response: Response){
        const serviceLocator = request.serviceLocator!;
        
        let expired;
        let imageMatch;
        let error;
       

        if(error){
            return response.status(401).json({ 'message': 'Bad credentials' });
        }
        if(expired){
            return response.status(401).json({ 'message': 'Token expired' });
        }
      

        return response.send(`<img src='http://localhost:4000/static/${request.body.image}'>`);


    }
}