import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CarBrandEntity implements CarBrand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
