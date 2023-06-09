import { Repository } from "typeorm";
import { AppDataSource } from "../../../db";
import User from "../domain/user";
import { UserRepository } from "../domain/user.repository";

class TypeORMUserRepository implements UserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async getById(id: string): Promise<User | null> {
    return this.userRepository.findOneBy({ id: parseInt(id) });
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async delete(user: User): Promise<number> {
    const result = await this.userRepository.delete(user.id);
    return result.affected || 0;
  }
}

export default TypeORMUserRepository;
