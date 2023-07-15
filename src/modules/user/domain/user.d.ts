interface User extends BaseModel {
  dni: string;
  role: Role;
  contactInfo: ContactInfo;
  loginInfo: LoginInfo;
  personalInfo: PersonalInfo;
}

type UserShow = Pick<User, "personalInfo" | "dni">;
