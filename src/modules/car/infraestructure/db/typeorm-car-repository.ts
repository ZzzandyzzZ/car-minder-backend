import { AppDataSource } from "db";
import { Repository } from "typeorm";
import { CarEntity } from "./car-entity";

export class TypeORMCarRepository implements CarRepository {
  private carRepository: Repository<Car>;

  constructor() {
    this.carRepository = AppDataSource.getRepository(CarEntity);
  }

  create(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }

  async delete(id: number): Promise<number> {
    const result = await this.carRepository.delete(id);
    return result.affected || 0;
  }

  getAll(): Promise<Array<Car> | []> {
    return this.carRepository.find({ loadRelationIds: true });
  }

  getById(id: number): Promise<Car | null> {
    return this.carRepository.findOneBy({ id });
  }

  getByLPlate(licensePlate: number): Promise<Car | null> {
    return this.carRepository.findOneBy({ licensePlate });
  }

  update(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }
}
