import { ServiceLocator } from "../../../infrastructure/config/service-locator";

export default async (accessToken: string, { accessTokenManager }: ServiceLocator) => {
  const decoded: any =await accessTokenManager.decode(accessToken);
  if (!decoded) {
    throw new Error('Invalid access token');
  }
  console.log("expiry time " + decoded.expired);
  
  const expired : boolean = decoded.expired;
  return  {image:decoded.image,expired:expired};
};
