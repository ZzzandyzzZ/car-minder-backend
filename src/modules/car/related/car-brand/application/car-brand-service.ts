export class CarBrandService {
  private carBrandRepository: CarBrandRepository;
  constructor(carBrandRepository: CarBrandRepository) {
    this.carBrandRepository = carBrandRepository;
  }
  async getCarBrands(): Promise<CarBrand[]> {
    const carBrands = await this.carBrandRepository.getAll();
    return carBrands;
  }
}
