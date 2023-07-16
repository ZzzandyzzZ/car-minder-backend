export class CarService {
  private repository;

  constructor(repository: CarRepository) {
    this.repository = repository;
  }

  getAll() {
    return this.repository.getAll();
  }

  getByLP(licensePlate: string) {
    return this.repository.getByLP(licensePlate);
  }

  create(carData: Car) {
    return this.repository.create(carData);
  }
}
