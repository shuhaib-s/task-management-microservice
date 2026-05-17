import { NextFunction, Request, Response } from "express";

const asyncHandler =
  (fun: Function) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fun(req, res, next)).catch(next);
  };

export default asyncHandler;