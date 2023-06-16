import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { CarColorEntity, CarModelEntity } from "@car/infraestructure/db";

@Entity()
export class CarEntity implements Car {
  @PrimaryColumn()
  licensePlate: number;

  @ManyToOne(() => CarColorEntity, (color: CarColor) => color.cars)
  color: CarColor;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => CarModelEntity, (model: CarModel) => model.cars)
  model: CarModel;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  year: number;
}
