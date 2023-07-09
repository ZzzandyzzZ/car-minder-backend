interface CarRepository {
  create(car: Car): Promise<Car>;
  delete(carId: number): Promise<number>;
  getAll(): Promise<Array<Car> | []>;
  getById(carId: number): Promise<Car | null>;
  getByLP(licensePlate: string): Promise<Car | null>;
  update(car: Car): Promise<Car>;
}
