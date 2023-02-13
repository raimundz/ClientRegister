import { Request, Response } from "express";
import listContactsService from "../../services/contatc/listContacts.services";

const listContactsController = async (request: Request, response: Response) => {
  try {
    const contacts = await listContactsService();
    return response.status(200).json(contacts);
  } catch (error) {
    if (error instanceof Error) {
      return response
        .status(400)
        .send({ error: error.name, message: error.message });
    }
  }
};

export default listContactsController;
