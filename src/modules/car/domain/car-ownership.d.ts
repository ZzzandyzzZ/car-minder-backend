interface CarOwnership {
  id: number;
  car: Car;
  createdAt: Date;
  customer: User;
  endDate: Date;
  startDate: Date;
}