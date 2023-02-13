import { Request, Response } from "express";

import sessionService from "../../services/session/session.services";

const sessionController = async (req: Request, res: Response) => {
  const data = req.body;

  const session: string = await sessionService(data);

  return res
    .status(201)
    .json({ status: 201, message: "successfully logged in", data: session });
};

export default sessionController;
