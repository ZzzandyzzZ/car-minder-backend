export class CarBrandService {
  private repository;

  constructor(repository: CarBrandRepository) {
    this.repository = repository;
  }

  getAll() {
    return this.repository.getAll();
  }

  getById(id: string) {
    return this.repository.getById(id as UUID);
  }
}
