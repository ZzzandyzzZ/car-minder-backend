export class CarModelService {
  private repository;

  constructor(repository: CarModelRepository) {
    this.repository = repository;
  }

  getAll() {
    return this.repository.getAll;
  }

  getById(id: string) {
    return this.repository.getById(id as UUID);
  }
}
