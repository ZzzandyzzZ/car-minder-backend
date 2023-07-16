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
    // Nested routes
    this.router.use("/brands", carBrandRouter);
    // this.router.use("/models");

    this.router.get("/", this.controller.getAll.bind(this.controller));
    this.router.get("/:licensePlate", this.controller.getByLP.bind(this.controller));
    this.router.post("/", this.controller.create.bind(this.controller));
  }

  public getRouter() {
    return this.router;
  }
}
