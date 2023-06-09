import { Router } from "express";
import UserController from "./user.controller";

class UserRouter {
  private userController;
  private router;
  constructor(userController: UserController) {
    this.userController = userController;
    this.router = Router();
    this.setupRoutes();
  }
  private setupRoutes(): void {
    this.router.get("/", this.userController.getUsers.bind(this.userController));
  }
  public getRouter(): Router {
    return this.router;
  }
}

export default UserRouter;
