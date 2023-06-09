export interface User {
  id: number;
  createdAt: Date;
  dni: string;
  email: string;
  firstname: string;
  lastname: string;
  middlename: string;
  phone: string;
  secondLastname: string;
  token: string;
}

export type UserShow = Pick<User, "id" | "firstname" | "dni">;
