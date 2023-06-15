import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("user")
export class UserEntity implements User {
  @PrimaryColumn()
  dni: string;

  @Column()
  createdAt: Date;

  @Column()
  role: Role;

  @Column()
  contactInfo: ContactInfo;

  @Column()
  loginInfo: LoginInfo;

  @Column()
  personalInfo: PersonalInfo;
}
