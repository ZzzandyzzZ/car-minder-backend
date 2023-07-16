export class CarModelService {
  private repository: CarModelRepository;

  constructor(repository: CarModelRepository) {
    this.repository = repository;
  }

  getAll() {
    return this.repository.getAll;
  }

  getById(id: UUID) {
    return this.repository.getById(id);
  }
}
