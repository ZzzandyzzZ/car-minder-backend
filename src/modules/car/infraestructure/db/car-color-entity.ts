import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CarEntity } from "@car/infraestructure/db";

@Entity()
export class CarColorEntity implements CarColor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  name: string;

  @Column()
  updatedAt: Date;

  @OneToMany(() => CarEntity, (car: Car) => car.color)
  cars: Car[];
}
