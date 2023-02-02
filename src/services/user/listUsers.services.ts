import { User } from "../../entities/user/user.entity";
import AppDataSource from "../../data-source";

const listUserService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = userRepository.find();

  return users;
};

export default listUserService;
