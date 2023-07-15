interface CarRepository extends BaseRepository<Car> {
  getByLP(licensePlate: string): Promise<Car | null>;
}
