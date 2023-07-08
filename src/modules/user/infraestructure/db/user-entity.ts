import { BaseModelEntity } from "@shared/infraestructure/db";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("user")
export class UserEntity extends BaseModelEntity implements User {
  @PrimaryColumn()
  dni: string;

  @Column()
  role: Role;

  @Column()
  contactInfo: ContactInfo;

  @Column()
  loginInfo: LoginInfo;

  @Column()
  personalInfo: PersonalInfo;
}
