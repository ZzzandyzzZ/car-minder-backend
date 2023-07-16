import { Repository } from "typeorm";

import { AppDataSource } from "db";
import { CarModelEntity } from "./car-model-entity";

export class TypeORMCarModelRepository implements CarModelRepository {
  private repository: Repository<CarModel>;

  constructor() {
    this.repository = AppDataSource.getRepository(CarModelEntity);
  }

  create(carModel: CarModel): Promise<CarModel> {
    return this.repository.save(carModel);
  }

  async delete(id: UUID): Promise<number> {
    const result = await this.repository.delete(id);
    return result.affected || 0;
  }

  getAll(): Promise<[] | CarModel[]> {
    return this.repository.find();
  }

  getById(id: UUID): Promise<CarModel | null> {
    return this.repository.findOneBy({ id });
  }
}
