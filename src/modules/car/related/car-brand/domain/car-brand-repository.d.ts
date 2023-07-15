interface CarBrandRepository extends BaseRepository<CarBrand> {
  getAll(): Promise<Array<CarBrand> | []>;
  getById(id: UUID): Promise<CarBrand | null>;
}
