import { Contact } from "../../entities/contacts.entity";
import AppDataSource from "../../data-source";

const listContactsService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = contactRepository.find();

  return contacts;
};

export default listContactsService;
