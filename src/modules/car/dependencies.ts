import { CarService } from "./application/car-service";
import { CarController } from "./infraestructure/api/car-controller";
import { CarRouter } from "./infraestructure/api/car-router";
import { TypeORMCarRepository } from "./infraestructure/db/typeorm-car-repository";

const carRepository = new TypeORMCarRepository();
const carService = new CarService(carRepository);
const carController = new CarController(carService);
export const carRouter = new CarRouter(carController).getRouter();
