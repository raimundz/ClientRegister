import { User } from "../../entities/user.entity";
import { Contact } from "../../entities/contacts.entity";
import AppDataSource from "../../data-source";

const deleteContactService = async (id: any) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = contactRepository.findOneBy({ id: id });

  await contactRepository.delete(id);

  return true;
};

export default deleteContactService;
