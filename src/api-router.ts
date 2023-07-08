import { Router } from "express";

import { userRouter } from "@user/dependencies";
import { carRouter } from "@car/dependencies";

const apiRouter = Router();

apiRouter.use("/cars", carRouter);
apiRouter.use("/users", userRouter);

export default apiRouter;
