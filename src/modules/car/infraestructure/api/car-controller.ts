import { CarService } from "@car/application/car-service";
import { Request, Response } from "express";

export class CarController {
  private carService: CarService;
  constructor(carService: CarService) {
    this.carService = carService;
  }
  async getCars(_req: Request, res: Response): Promise<void> {
    const cars = await this.carService.getCars();
    res.json({
      cars,
    });
  }
  async getCarBy(req: Request, res: Response): Promise<void> {
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
