import { Repository } from "typeorm";

import { AppDataSource } from "db";
import { CarBrandEntity } from "./car-brand-entity";

export class TypeORMCarBrandRepository implements CarBrandRepository {
  private repository: Repository<CarBrand>;

  constructor() {
    this.repository = AppDataSource.getRepository(CarBrandEntity);
  }

  create(model: CarBrand): Promise<CarBrand> {
    return this.repository.save(model);
  }

  async delete(id: UUID): Promise<number> {
    const result = await this.repository.delete(id);
    return result.affected || 0;
  }

  getAll(): Promise<CarBrand[] | []> {
    return this.repository.find({ loadRelationIds: true });
  }

  getById(id: UUID): Promise<CarBrand | null> {
    return this.repository.findOneBy({ id });
  }
}
