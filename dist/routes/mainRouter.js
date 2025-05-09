import { Router } from "express";
import userRouter from "./userRouter.js";
import bookRouter from "./bookRouter.js";
import reservationRouter from "./reservation.js";
const mainRouter = Router();
mainRouter.use('/user', userRouter);
mainRouter.use('/book', bookRouter);
mainRouter.use('/reservation', reservationRouter);
export default mainRouter;
