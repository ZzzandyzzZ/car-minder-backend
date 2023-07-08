import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { CarBrandEntity, CarEntity } from "@car/infraestructure/db";
import { BaseModelEntity } from "@shared/infraestructure/db/base-model-entity";

@Entity()
export class CarModelEntity extends BaseModelEntity implements CarModel {
  @ManyToOne(() => CarBrandEntity, (brand: CarBrand) => brand.models, { cascade: ["insert"] })
  brand: CarBrand;

  @OneToMany(() => CarEntity, (car: Car) => car.model)
  cars: Car[];

  @Column()
  name: string;
}
