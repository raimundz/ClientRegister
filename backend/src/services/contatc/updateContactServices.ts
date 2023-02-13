import { Contact } from "../../entities/contacts.entity";
import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";

const updateContactService = async ({ name, email, tel, userId, id }: any) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });
  const findContact = await contactRepository.findOneBy({ id: id });
  await contactRepository.update(id, {
    id: findContact?.id,
    email: email ? email : findContact?.email,
    name: name ? name : findContact?.name,
    tel: tel ? tel : findContact?.tel,
    createdAt: findContact?.createdAt,
    user: user!,
  });

  const contact = await contactRepository.findOneBy({ id: id });

  return contact;
};

export default updateContactService;
