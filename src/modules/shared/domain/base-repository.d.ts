interface BaseRepository<T> {
  create?(model: T): Promise<T>;
  delete?(id: UUID): Promise<number>;
  getAll(): Promise<Array<T> | []>;
  getById(id: UUID): Promise<T | null>;
  update?(model: T): Promise<T>;
}
