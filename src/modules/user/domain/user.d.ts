interface User {
  dni: string;
  createdAt: Date;
  role: Role;
  contactInfo: ContactInfo;
  loginInfo: LoginInfo;
  personalInfo: PersonalInfo;
}

type UserShow = Pick<User, "firstname" | "dni">;
