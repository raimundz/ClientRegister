import { Request, Response } from "express";
import updateContactService from "../../services/contatc/updateContactServices";

const updateContactController = async (
  request: Request,
  response: Response
) => {
  const { name, email, tel } = request.body;
  const userId = request.body.decodifiedToken.id;
  const { id } = request.params;
  try {
    const contact = await updateContactService({
      name,
      email,
      tel,
      userId,
      id,
    });
    return response.status(201).json(contact);
  } catch (error) {
    if (error instanceof Error) {
      return response
        .status(400)
        .send({ error: error.name, message: error.message });
    }
  }
};

export default updateContactController;
