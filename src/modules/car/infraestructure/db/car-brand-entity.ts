import { Entity, Column, OneToMany } from "typeorm";
import { CarModelEntity } from "@car/infraestructure/db";
import { BaseEntity } from "@shared/infraestructure/db";

@Entity()
export class CarBrandEntity extends BaseEntity implements CarBrand {
  @OneToMany(() => CarModelEntity, (model: CarModel) => model.brand)
  models: CarModelEntity[];

  @Column()
  name: string;
}
