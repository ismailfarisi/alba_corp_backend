import { ServiceLocator } from "../../../infrastructure/config/service-locator";

export default async (payload: any,expiryTime:number, {
  accessTokenManager,
}: ServiceLocator) => accessTokenManager.generate(payload,expiryTime);