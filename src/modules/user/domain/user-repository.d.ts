interface UserRepository {
  create(user: User): Promise<User>;
  delete(user: User): Promise<number>;
  getAll(): Promise<Array<User> | []>;
  getById(id: string): Promise<User | null>;
  update(user: User): Promise<User>;
}
