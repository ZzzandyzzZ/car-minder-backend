import { Router } from "express";
import { CarController } from "./car-controller";
import { carBrandRouter } from "@car-brand/dependencies";

export class CarRouter {
  private controller: CarController;
  private router: Router;
  constructor(controller: CarController) {
    this.controller = controller;
    this.router = Router();
    this.setupRoutes();
  }
  private setupRoutes(): void {
    this.router.use("/brands", carBrandRouter);

    this.router.get("/", this.controller.getAll.bind(this.controller));
    this.router.get("/:licensePlate", this.controller.getByLP.bind(this.controller));
    this.router.post("/", this.controller.create.bind(this.controller));

    // this.router.use("/models");
  }
  public getRouter() {
    return this.router;
  }
}
