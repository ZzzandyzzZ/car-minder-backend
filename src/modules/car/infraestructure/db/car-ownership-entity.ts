import { BaseEntity } from "@shared/infraestructure/db";
import { Entity, Column } from "typeorm";

@Entity()
export class CarOwnershipEntity extends BaseEntity implements CarOwnership {
  @Column()
  car: Car;

  @Column()
  customer: User;

  @Column()
  endDate: Date;

  @Column()
  startDate: Date;
}
