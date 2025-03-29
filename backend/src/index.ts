import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import { config } from "./configs/app.config";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: config.FRONTEND_ORIGIN,
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({
      message: "Welcome to the API of CelestiCal",
    });
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(config.PORT, async () => {
  console.log(
    `Server is running on port ${config.PORT} in ${config.NODE_ENV} mode`
  );
});
