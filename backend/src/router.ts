import { Router, Request, Response, query } from "express";
import { getUser } from "./composer";

import { UserSequelize } from "./database";
import { controllerExpress } from "./helpers/controllerExpress";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { auth } from "./middleware/login";

dotenv.config();
const route = Router();

route.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Hello World" });
});

///User
route.get("/users", controllerExpress(getUser));

route.get("/us", auth, async (request: Request, response: Response) => {
  const req = request.body.token;
  const empresa = request.body.empresa;
  const users = await UserSequelize.findOne({
    where: { email: "lara@gmail.com" },
  });
  return response.json({
    users,
    req,
    empresa,
  });
});

type Email = {
  id: number;
  email: string | null;
  password: string | null;
};

const JWTSecret = process.env.API_KEY as string;

route.post("/login", async (request: Request, response: Response) => {
  const { email, password } = request.body;
  if (email != undefined && password != undefined) {
    const user = await UserSequelize.findOne({
      where: { email: email },
      attributes: ["id", "email", "password"],
    });

    if (user != null) {
      const user2 = user?.toJSON() as Email;

      if (user2.password == password) {
        jwt.sign(
          {
            id: user2.id,
            email: user2.email,
          },
          JWTSecret,
          { expiresIn: "5h" },
          (err, token) => {
            if (err) {
              response.status(400);
              return response.json({ error: "Falha interna" });
            } else {
              return response.json({
                token: token,
                email: user2.email,
                message: "Login realizado com sucesso",
              });
            }
          }
        );
      } else {
        return response.status(400).json({ message: "Senha incorreta" });
      }
    } else {
      return response.json({ message: "Usuário não encontrado" });
    }
  } else {
    return response
      .status(400)
      .json({ message: "Email e/ou Senha não podem ser nulo" });
  }
});

export default route;
