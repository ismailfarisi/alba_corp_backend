import { ServiceLocator } from "../../../infrastructure/config/service-locator";

export default (accessToken: string, { accessTokenManager }: ServiceLocator) => {
  const decoded: any = accessTokenManager.decode(accessToken);
  if (!decoded) {
    throw new Error('Invalid access token');
  }
  console.log("expiry time " + decoded.expired);
  
  const expired : boolean =new Date(decoded.expired ).getMilliseconds() >  Date.now();
  return  {image:decoded.image,expired:expired};
};
