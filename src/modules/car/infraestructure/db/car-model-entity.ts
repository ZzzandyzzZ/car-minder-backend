import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { CarBrandEntity, CarEntity } from "@car/infraestructure/db";

@Entity()
export class CarModelEntity implements CarModel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CarBrandEntity, (brand: CarBrand) => brand.models)
  brand: CarBrand;

  @OneToMany(() => CarEntity, (car: Car) => car.model)
  cars: Car[];

  @Column()
  createdAt: Date;

  @Column()
  name: string;

  @Column()
  updatedAt: Date;
}
