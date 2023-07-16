import { Entity, Column, ManyToOne, OneToMany } from "typeorm";

import { BaseModelEntity } from "@shared/infraestructure/db/base-model-entity";
import { CarEntity } from "@car/infraestructure/db";
import { CarBrandEntity } from "@car-brand/infraestructure/db";

@Entity()
export class CarModelEntity extends BaseModelEntity implements CarModel {
  @ManyToOne(() => CarBrandEntity, (brand: CarBrand) => brand.models, { cascade: ["insert"] })
  brand: CarBrand;

  @OneToMany(() => CarEntity, (car: Car) => car.model)
  cars: Car[];

  @Column()
  name: string;
}
