interface User extends BaseModel {
  dni: string;
  createdAt: Date;
  role: Role;
  contactInfo: ContactInfo;
  loginInfo: LoginInfo;
  personalInfo: PersonalInfo;
}

type UserShow = Pick<User, "personalInfo" | "dni">;
