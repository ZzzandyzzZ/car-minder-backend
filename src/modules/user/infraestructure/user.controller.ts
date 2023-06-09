import { Request, Response } from "express";
import UserService from "../application/user.service";

class UserController {
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }
  getUsers(_req: Request, res: Response) {
    const users = this.userService.getUsers();
    res.json({ data: users });
  }
}

export default UserController;
