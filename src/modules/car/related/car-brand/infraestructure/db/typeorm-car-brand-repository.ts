import { Repository } from "typeorm";

import { AppDataSource } from "db";
import { CarBrandEntity } from "./car-brand-entity";

export class TypeORMCarBrandRepository implements CarBrandRepository {
  private carBrandRepository: Repository<CarBrand>;

  constructor() {
    this.carBrandRepository = AppDataSource.getRepository(CarBrandEntity);
  }

  getAll(): Promise<CarBrand[] | []> {
    return this.carBrandRepository.find({ loadRelationIds: true });
  }

  getById(id: UUID): Promise<CarBrand | null> {
    return this.carBrandRepository.findOneBy({ id });
  }
}
