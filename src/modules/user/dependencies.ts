import UserService from "./application/user.service";
import TypeORMUserRepository from "./infraestructure/typeorm.user.repository";
import UserController from "./infraestructure/user.controller";
import UserRouter from "./infraestructure/user.router";

const userRepository = new TypeORMUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
export const userRouter = new UserRouter(userController).getRouter();
