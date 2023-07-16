import type { Request, Response } from "express";

import { CarService } from "@car/application/car-service";

export class CarController {
  private service: CarService;

  constructor(service: CarService) {
    this.service = service;
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const cars = await this.service.getAll();
    res.json({
      cars,
    });
  }

  async getByLP(req: Request, res: Response): Promise<void> {
    const car = await this.service.getByLP(req.params.licensePlate);
    if (!car) {
      res.status(404).json({
        message: "Car not found",
      });
      return;
    }
    res.json({
      car,
    });
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const car = await this.service.create(req.body);
      res.json({
        message: "Car created",
        car,
      });
    } catch (error) {
      res.status(400).json({
        message: "Can not create car",
        error,
      });
    }
  }
}
