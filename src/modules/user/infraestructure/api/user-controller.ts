import { Request, Response } from "express";
import { UserService } from "@user/application";

export class UserController {
  private userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }
  async getUsers(_req: Request, res: Response) {
    const users = await this.userService.getUsers();
    res.json({ data: users });
  }
}
