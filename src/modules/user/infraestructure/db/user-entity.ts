import { Entity, PrimaryGeneratedColumn, Column, Unique, PrimaryColumn } from "typeorm";

import { User } from "@user/domain";

@Entity("user")
@Unique(["dni"])
@Unique(["email"])
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @PrimaryColumn()
  dni: string;

  @Column()
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ nullable: true })
  middlename: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  secondLastname: string;

  @Column()
  token: string;
}
