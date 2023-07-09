import { Router } from "express";
import { CarController } from "./car-controller";

export class CarRouter {
  private carController: CarController;
  private router: Router;
  constructor(carController: CarController) {
    this.carController = carController;
    this.router = Router();
    this.setupRoutes();
  }
  private setupRoutes(): void {
    this.router.get("/", this.carController.getCars.bind(this.carController));
    this.router.get("/:licensePlate", this.carController.getCarBy.bind(this.carController));
  }
  public getRouter(): Router {
    return this.router;
  }
}
