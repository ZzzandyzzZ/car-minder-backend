import { Router } from "express";
import { type CarBrandController } from "./car-brand-controller";

export class CarBrandRouter {
  private router: Router;
  private controller: CarBrandController;
  constructor(controller: CarBrandController) {
    this.controller = controller;
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get("/", this.controller.getAll.bind(this.controller));
    this.router.get("/:id", this.controller.getById.bind(this.controller));
  }

  public getRouter() {
    return this.router;
  }
}
