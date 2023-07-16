export class CarBrandService {
  private repository: CarBrandRepository;

  constructor(repository: CarBrandRepository) {
    this.repository = repository;
  }

  getAll(): Promise<CarBrand[]> {
    return this.repository.getAll();
  }

  getById(id: string): Promise<CarBrand | null> {
    return this.repository.getById(id as UUID);
  }
}
