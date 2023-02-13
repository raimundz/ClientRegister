import { Request, Response } from "express";
import deleteContactService from "../../services/contatc/deleteContact.services";

const deleteContactController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;
  try {
    const deletedUser = await deleteContactService(id);
    return response.status(204).json({ message: "User deleted with sucess" });
  } catch (error) {
    if (error instanceof Error) {
      return response
        .status(400)
        .send({ error: error.name, message: error.message });
    }
  }
};

export default deleteContactController;
