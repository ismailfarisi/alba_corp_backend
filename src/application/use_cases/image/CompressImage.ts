import { ServiceLocator } from "../../../infrastructure/config/service-locator";

export default async (images: {filename:string,buffer:Buffer}[], {
    imageCompressManager,
  }: ServiceLocator) =>{
    imageCompressManager.compress(images)
  }