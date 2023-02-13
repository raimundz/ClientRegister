import { Request, Response } from "express";
import getOwnUserService from "../../services/user/getOwnUser.services";

const getOwnUserController = async (request: Request, response: Response) => {
  const id = request.body.decodifiedToken.id;
  try {
    const users = await getOwnUserService(id);
    return response.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      return response
        .status(400)
        .send({ error: error.name, message: error.message });
    }
  }
};

export default getOwnUserController;
