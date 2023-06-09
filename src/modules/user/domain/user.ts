class User {
  constructor(
    readonly id: number,
    readonly createdAt: Date,
    readonly dni: string,
    readonly email: string,
    readonly firstname: string,
    readonly lastname: string,
    readonly middlename: string,
    readonly phone: string,
    readonly secondLastname: string,
    readonly token: string
  ) {
    this.firstname = firstname;
  }
}

export default User;
