import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

import { BaseModelEntity } from "@shared/infraestructure/db";
import { CarColorEntity } from "./car-color-entity";
import { CarModelEntity } from "@car-model/infraestructure/db";

@Entity()
export class CarEntity extends BaseModelEntity implements Car {
  @ManyToOne(() => CarColorEntity, (color: CarColor) => color.cars)
  color: CarColor;

  @PrimaryColumn()
  licensePlate: number;

  @ManyToOne(() => CarModelEntity, (model: CarModel) => model.cars)
  model: CarModel;

  @Column()
  year: number;
}
