import { CarService } from "@car/application/car-service";
import { Request, Response } from "express";

export class CarController {
  private carService: CarService;
  constructor(carService: CarService) {
    this.carService = carService;
  }
  async getAll(_req: Request, res: Response): Promise<void> {
    const cars = await this.carService.getAll();
    res.json({
      cars,
    });
  }
  async getByLP(req: Request, res: Response): Promise<void> {
    const car = await this.carService.getByLP(req.params.licensePlate);
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
}
