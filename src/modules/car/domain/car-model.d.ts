interface CarModel extends BaseModel {
  readonly brand: CarBrand;
  readonly cars: Car[];
  readonly name: string;
}
