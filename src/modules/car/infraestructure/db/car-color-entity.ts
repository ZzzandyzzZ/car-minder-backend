import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
