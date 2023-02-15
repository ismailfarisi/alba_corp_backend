import { ServiceLocator } from "../../../infrastructure/config/service-locator";

export default async (par: any, {
  accessTokenManager,
}: ServiceLocator) => accessTokenManager.generate({
  expired: par.timestamp,
  image:par.image
});