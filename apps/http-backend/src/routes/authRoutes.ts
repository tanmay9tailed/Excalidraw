import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { CreateUserSchema, SigninSchema } from "@repo/common/config";
const JWT_SECRET = require("@repo/backend-commons/config")

const authRoutes = express.Router();

interface Res {
  message: string;
  data?: string;
}

authRoutes.post("/signin", (req: Request, res: Response): void => {
  const parsedData = SigninSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
  const secret = JWT_SECRET
  const token = jwt.sign(
    {
      // username,
    },
    secret!
  );
  const response: Res = { message: "Signin successful", data: token };
  res.status(200).json(response);
});

authRoutes.post("/signup", (req: Request, res: Response): void => {
  const parsedData = CreateUserSchema.safeParse(req.body);
    if (!parsedData.success) {
        console.log(parsedData.error);
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

  const response: Res = { message: "Signup successful" };
  res.status(200).json(response);
});

export default authRoutes;
