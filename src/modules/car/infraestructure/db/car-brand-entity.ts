import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CarModelEntity } from "@car/infraestructure/db";

@Entity()
export class CarBrandEntity implements CarBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @OneToMany(() => CarModelEntity, (model: CarModel) => model.brand)
  models: CarModel[];

  @Column()
  name: string;

  @Column()
  updatedAt: Date;
}
