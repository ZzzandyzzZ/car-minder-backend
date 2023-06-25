interface Car extends BaseModel {
  readonly color: CarColor;
  readonly licensePlate: number;
  readonly model: CarModel;
  readonly year: number;
}
