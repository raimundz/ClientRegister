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
  const user = await userRepository.findOneBy({ id: userId });

  const contact = new Contact();
  contact.createdAt = Date();
  contact.email = email;
  contact.name = name;
  contact.tel = tel;
  contact.user = user!;

  contactRepository.create(contact);
  await contactRepository.save(contact);
  return contact;
};

export default createContactService;
