interface CarOwnership extends BaseModel {
  readonly car: Car;
  readonly customer: User;
  readonly endDate: Date;
  readonly startDate: Date;
}
