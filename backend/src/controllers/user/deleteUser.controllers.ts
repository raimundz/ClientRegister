import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.services";

const userDeleteController = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const user = await deleteUserService(id);

    return response.status(204).json({ message: "User deleted with sucess" });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message == "User not found") {
        return response.status(404).send({
          error: error.name,
          message: error.message,
        });
      } else {
        return response.status(400).send({
          error: error.name,
          message: error.message,
        });
      }
    }
  }
};

export default userDeleteController;
