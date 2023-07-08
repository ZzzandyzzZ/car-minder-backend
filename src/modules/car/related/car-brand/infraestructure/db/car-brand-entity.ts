import { Entity, Column, OneToMany } from "typeorm";
// import { CarModelEntity } from "@car/infraestructure/db";
import { BaseModelEntity } from "@shared/infraestructure/db";
import { CarModelEntity } from "@car-model/infraestructure/db";
// import { CarModelEntity } from "@car-model/infraestructure/db";

@Entity()
export class CarBrandEntity extends BaseModelEntity implements CarBrand {
  @OneToMany(() => CarModelEntity, (model: CarModel) => model.brand)
  models: CarModel[];

  @Column()
  name: string;
}
