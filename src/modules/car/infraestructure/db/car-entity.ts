import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class CarEntity implements Car {
  @PrimaryColumn()
  licensePlate: number;

  @Column()
  color: CarColor;

  @Column()
  createdAt: Date;

  @Column()
  model: CarModel;

  @Column()
  year: number;
}
