interface CarBrandRepository {
  create: (car: CarBrand) => Promise<CarBrand>;
  delete: (carId: number) => Promise<number>;
  getAll: () => Promise<Array<CarBrand> | []>;
  getById: (carId: number) => Promise<CarBrand | null>;
  update: (car: CarBrand) => Promise<CarBrand>;
}
