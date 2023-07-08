import { CarService } from "@car/application/car-service";
import { Request, Response } from "express";

export class CarController {
  private carService: CarService;
  constructor(carService: CarService) {
    this.carService = carService;
  }
  async getCars(_req: Request, res: Response): Promise<Car[]> {
    const cars = await this.carService.getCars();
    res.json({
      cars,
    });
    return cars;
  }
}
