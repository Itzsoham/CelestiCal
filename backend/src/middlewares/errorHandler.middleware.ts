import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../configs/http.config";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(`Error Occurred on PATH: ${req.path}`, err);

  if (err instanceof SyntaxError) {
    res
      .status(HTTPSTATUS.BAD_REQUEST)
      .json({
        message: "Invalid JSON format. Please check your request body.",
        error: err?.message || "Invalid JSON",
      })
      .end();
  }

  res
    .status(HTTPSTATUS.INTERNAL_SERVER_ERROR)
    .json({
      message: "Internal Server Error",
      error: err?.message || "Something went wrong",
    })
    .end();
};
