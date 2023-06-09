import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";
import User from "../domain/user";

@Entity()
@Unique(["dni"])
@Unique(["email"])
class UserEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  dni: string;

  @Column()
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  middlename: string;

  @Column()
  phone: string;

  @Column()
  secondLastname: string;

  @Column()
  token: string;
}

export default UserEntity;
