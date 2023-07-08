export class CarService {
  private carRepository: CarRepository;
  constructor(carRepository: CarRepository) {
    this.carRepository = carRepository;
  }
  async getCars(): Promise<Car[]> {
    const cars = this.carRepository.getAll();
    return cars;
  }
}
