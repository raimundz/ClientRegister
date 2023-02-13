import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.services";

const createUserController = async (request: Request, response: Response) => {
  const { name, email, password, tel } = request.body;
  try {
    const user = await createUserService({ name, email, password, tel });
    return response.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return response
        .status(400)
        .send({ error: error.name, message: error.message });
    }
  }
};

export default createUserController;
