import { Repository } from "typeorm";

import { AppDataSource } from "db";
import { CarEntity } from "./car-entity";

export class TypeORMCarRepository implements CarRepository {
  private carRepository: Repository<Car>;

  constructor() {
    this.carRepository = AppDataSource.getRepository(CarEntity);
  }

  create(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }

  async delete(id: UUID): Promise<number> {
    const result = await this.carRepository.delete(id);
    return result.affected || 0;
  }

  getAll(): Promise<Array<Car> | []> {
    return this.carRepository.find({ loadRelationIds: true });
  }

  getById(id: UUID): Promise<Car | null> {
    return this.carRepository.findOneBy({ id });
  }

  getByLP(licensePlate: string): Promise<Car | null> {
    return this.carRepository.findOne({
      where: { licensePlate },
      relations: ["model", "color"],
      select: { model: { name: true }, color: { name: true } },
    });
  }

  update(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }
}
