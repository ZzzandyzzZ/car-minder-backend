import { TypeORMUserRepository, UserController, UserRouter } from "@user/infraestructure";
import { UserService } from "@user/application";

const userRepository = new TypeORMUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);
export const userRouter = new UserRouter(userController).getRouter();
