import { Request, Response } from "express";
import Queue from "../lib/Queue";

export const sync = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = {
    name,
    email,
    password,
  };

  // todo: Adicionar o job
  Queue.add({ user });

  return res.json(user);
};
