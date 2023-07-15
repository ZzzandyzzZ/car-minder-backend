export class CarBrandService {
  private carBrandRepository: CarBrandRepository;
  constructor(carBrandRepository: CarBrandRepository) {
    this.carBrandRepository = carBrandRepository;
  }
  getAll(): Promise<CarBrand[]> {
    return this.carBrandRepository.getAll();
  }
  getById(id: string): Promise<CarBrand | null> {
    return this.carBrandRepository.getById(id as UUID);
  }
}
