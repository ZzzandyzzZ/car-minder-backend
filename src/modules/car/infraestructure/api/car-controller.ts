import { CarService } from "@car/application/car-service";

export class CarController {
  private carService: CarService;
  constructor(carService: CarService) {
    this.carService = carService;
  }
  async getCars(): Promise<Car[]> {
    const cars = this.carService.getCars();
    return cars;
  }
}
