import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { CarColorEntity, CarModelEntity } from "@car/infraestructure/db";
import { BaseEntity } from "@shared/infraestructure/db";

@Entity()
export class CarEntity extends BaseEntity implements Car {
  @ManyToOne(() => CarColorEntity, (color: CarColor) => color.cars)
  color: CarColor;

  @PrimaryColumn()
  licensePlate: number;

  @ManyToOne(() => CarModelEntity, (model: CarModel) => model.cars)
  model: CarModel;

  @Column()
  year: number;
}
