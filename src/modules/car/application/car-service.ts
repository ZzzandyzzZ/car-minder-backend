export class CarService {
  private repository: CarRepository;

  constructor(repository: CarRepository) {
    this.repository = repository;
  }

  getAll(): Promise<Car[]> {
    return this.repository.getAll();
  }

  getByLP(licensePlate: string): Promise<Car | null> {
    return this.repository.getByLP(licensePlate);
  }

  create(carData: Car): Promise<Car> {
    return this.repository.create(carData);
  }
}
