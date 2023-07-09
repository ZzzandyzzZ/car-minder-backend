interface Car extends BaseModel {
  readonly color: CarColor;
  readonly licensePlate: string;
  readonly model: CarModel;
  readonly year: number;
}
