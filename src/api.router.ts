import { Router } from "express";
import { userRouter } from "./modules/user/dependencies";

const apiRouter = Router();

apiRouter.use("/users", userRouter);

export default apiRouter;
