import { Repository } from "typeorm";

import { UserEntity } from "./user-entity";
import { AppDataSource } from "db";

export class TypeORMUserRepository implements UserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  async getById(id: UUID): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async delete(id: UUID): Promise<number> {
    const result = await this.userRepository.delete(id);
    return result.affected || 0;
  }
}
