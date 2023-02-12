import { Contact } from "../../entities/contacts.entity";
import AppDataSource from "../../data-source";
import { IContacts } from "../../interfaces/contact/contact";
import { User } from "../../entities/user.entity";

const createContactService = async ({
  name,
  email,
  tel,
  userId,
}: IContacts) => {
  const contactRepository = AppDataSource.getRepository(Contact);  
  const userRepository = AppDataSource.getRepository(User);
  

  const user = userRepository.findOneBy({id:userId})
};

export default createContactService;
