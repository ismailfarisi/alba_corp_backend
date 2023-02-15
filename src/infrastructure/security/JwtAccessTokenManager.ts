import jwt from 'jsonwebtoken';
import environment from '../config/environment';
import AccessTokenManager from '../../application/security/AccessTokenManager';
import { error } from 'console';

export default class JwtAccessTokenManager implements AccessTokenManager {
  generate(payload: object,expiryTime:number): string {
    return jwt.sign(payload, environment.jwtSecretKey,{expiresIn:expiryTime});
  }

  decode(accessToken: string): object | null {
    return new Promise((resolve, reject) => {
     jwt.verify(accessToken, environment.jwtSecretKey,(error,decoded)=>{
        if(error instanceof jwt.TokenExpiredError){
          resolve({expired:true});
        }else if(decoded){
          const d = decoded as jwt.JwtPayload;
          
          resolve(d);
        }else{
          reject()
        }
    });
    
    });
    // return token != null ? token as object : null;
  }
};