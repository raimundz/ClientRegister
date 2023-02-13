import { Request, Response } from "express";
import listUserService from "../../services/user/listUsers.services";
const listUsersController = async (request: Request, response: Response) => {
  try {
    const users = await listUserService();
    return response.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      return response
        .status(400)
        .send({ error: error.name, message: error.message });
    }
  }
};

export default listUsersController;
