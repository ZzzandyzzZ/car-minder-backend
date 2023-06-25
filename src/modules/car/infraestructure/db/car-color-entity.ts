import { Entity, Column, OneToMany } from "typeorm";
import { CarEntity } from "@car/infraestructure/db";
import { BaseEntity } from "@shared/infraestructure/db";

@Entity()
export class CarColorEntity extends BaseEntity implements CarColor {
  @OneToMany(() => CarEntity, (car: Car) => car.color)
  cars: Car[];

  @Column()
  name: string;
}
