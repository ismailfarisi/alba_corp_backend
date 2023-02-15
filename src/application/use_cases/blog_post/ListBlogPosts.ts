import { ServiceLocator } from '../../../infrastructure/config/service-locator';

export default async ({ blogPostRepository }: ServiceLocator) => blogPostRepository!.getAll();