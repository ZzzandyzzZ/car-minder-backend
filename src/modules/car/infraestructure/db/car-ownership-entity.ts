import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CarOwnershipEntity implements CarOwnership {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  car: Car;

  @Column()
  createdAt: Date;

  @Column()
  customer: User;

  @Column()
  endDate: Date;

  @Column()
  startDate: Date;
}
