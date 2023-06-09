import { User } from "@user/domain";

export interface UserRepository {
  getById(id: string): Promise<User | null>;
  getAll(): Promise<Array<User> | []>;
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
  delete(user: User): Promise<number>;
}
