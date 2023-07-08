interface CarModelRepository {
  create: (car: CarModel) => Promise<CarModel>;
  delete: (carId: number) => Promise<number>;
  getAll: () => Promise<Array<CarModel> | []>;
  getById: (carId: number) => Promise<CarModel | null>;
  update: (car: CarModel) => Promise<CarModel>;
}
