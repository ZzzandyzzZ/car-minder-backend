import { Entity, Column } from "typeorm";

import { BaseModelEntity } from "@shared/infraestructure/db";

@Entity()
export class CarOwnershipEntity extends BaseModelEntity implements CarOwnership {
  @Column()
  car: Car;

  @Column()
  customer: User;

  @Column()
  endDate: Date;

  @Column()
  startDate: Date;
}
