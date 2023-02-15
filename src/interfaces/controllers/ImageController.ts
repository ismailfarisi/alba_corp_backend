
import { Request, Response } from 'express';
import GetAccessToken from '../../application/use_cases/image/GenerateToken';

export default {
    async generateImageToken(request: Request, response: Response){
        const serviceLocator = request.serviceLocator!;

    // Input
    const image = request.body.image;
    const timestamp = (Date.now() + 1000 * 60*5);
    console.log(timestamp);
    // Treatment
    let accessToken;
    try {
       accessToken = await GetAccessToken({image:image},timestamp, serviceLocator);
    } catch (err) {
      console.log(err);
    }
    // Output
    if (!accessToken) {
      return response.status(401).json({ 'message': 'something went wrong' });
    }
    const output = {
        "access_token":accessToken
    };
    return response.json(output);
  },
    
    async getImage(request: Request, response: Response){
        const serviceLocator = request.serviceLocator!;
        
        return response.send(`<img src='http://localhost:4000/static/${request.body.image}'>`);


    }
}