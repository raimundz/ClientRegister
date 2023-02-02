import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.services";
import { IUserUpdate } from "../../interfaces/user/user";
const updateUserController = async (request: Request, response: Response) => {
  const user: IUserUpdate = request.updateUser;
  const dataBody = request.body;
  const { id } = request.params;
  const token = request.headers.authorization?.split(" ")[1];
  id;

  if (
    dataBody.isActive != undefined ||
    dataBody.isAdm != undefined ||
    dataBody.id != undefined
  ) {
    return response
      .status(401)
      .json({ message: "You can't change this attributes" });
  }

  try {
    const updatedUser = await updateUserService(user, id, token);
    return response.status(200).json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      return response
        .status(404)
        .send({ error: error.name, message: error.message });
    }
  }
};

export default updateUserController;
