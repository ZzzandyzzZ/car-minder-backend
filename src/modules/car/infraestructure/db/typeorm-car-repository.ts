import { Repository } from "typeorm";

import { AppDataSource } from "db";
import { CarEntity } from "./car-entity";

export class TypeORMCarRepository implements CarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = AppDataSource.getRepository(CarEntity);
  }

  create(car: Car): Promise<Car> {
    return this.repository.save(car);
  }

  async delete(id: UUID): Promise<number> {
    const result = await this.repository.delete(id);
    return result.affected || 0;
  }

  getAll(): Promise<Array<Car> | []> {
    return this.repository.find({ loadRelationIds: true });
  }

  getById(id: UUID): Promise<Car | null> {
    return this.repository.findOneBy({ id });
  }

  getByLP(licensePlate: string): Promise<Car | null> {
    return this.repository.findOne({
      where: { licensePlate },
      relations: ["model", "color"],
      select: { model: { name: true }, color: { name: true } },
    });
  }

  update(car: Car): Promise<Car> {
    return this.repository.save(car);
  }
}
