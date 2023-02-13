import { Request, Response } from "express";
import createContactService from "../../services/contatc/createContact.services";

const createContactController = async (
  request: Request,
  response: Response
) => {
  const { name, email, tel } = request.body;

  const userId = request.body.decodifiedToken.id;
  try {
    const contact = await createContactService({ name, email, tel, userId });
    return response.status(201).json(contact);
  } catch (error) {
    if (error instanceof Error) {
      return response
        .status(400)
        .send({ error: error.name, message: error.message });
    }
  }
};

export default createContactController;
