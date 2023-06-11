interface User {
  dni: string;
  createdAt: Date;
  role: Role;
  contactInfo: ContactInfo;
  loginInfo: LoginInfo;
  personalInfo: PersonalInfo;
}

interface PersonalInfo {
  id: number;
  firstname: string;
  lastname: string;
  middlename: string;
  secondLastname: string;
}

interface ContactInfo {
  id: number;
  phone: string;
  email: string;
  address: string;
  city: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Role {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface LoginInfo {
  id: number;
  GMtoken: string;
}

type UserShow = Pick<User, "firstname" | "dni">;
