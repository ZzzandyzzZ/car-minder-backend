export class CarService {
  private carRepository: CarRepository;
  constructor(carRepository: CarRepository) {
    this.carRepository = carRepository;
  }
  async getAll(): Promise<Car[]> {
    // Validation
    const cars = await this.carRepository.getAll();
    return cars;
  }
  async getByLP(licensePlate: string): Promise<Car | null> {
    const car = await this.carRepository.getByLP(licensePlate);
    return car;
  }
  create(carData: Car): Promise<Car> {
    return this.carRepository.create(carData);
  }
}
