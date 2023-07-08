export class CarService {
  private carRepository: CarRepository;
  constructor(carRepository: CarRepository) {
    this.carRepository = carRepository;
  }
  async getCars(): Promise<Car[]> {
    // Validation
    const cars = await this.carRepository.getAll();
    return cars;
  }
}
