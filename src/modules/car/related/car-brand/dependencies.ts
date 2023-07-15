import { CarBrandService } from "./application/car-brand-service";
import { CarBrandController } from "./infraestructure/api/car-brand-controller";
import { CarBrandRouter } from "./infraestructure/api/car-brand-router";
import { TypeORMCarBrandRepository } from "./infraestructure/db/typeorm-car-brand-repository";

const carBrandRepository = new TypeORMCarBrandRepository();
const carBrandService = new CarBrandService(carBrandRepository);
const carBrandController = new CarBrandController(carBrandService);
export const carBrandRouter = new CarBrandRouter(carBrandController).getRouter();
