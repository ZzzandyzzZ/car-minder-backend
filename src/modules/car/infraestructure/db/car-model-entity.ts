import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CarModelEntity implements CarModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: CarBrand;

  @Column()
  createdAt: Date;

  @Column()
  name: string;

  @Column()
  updatedAt: Date;
}
