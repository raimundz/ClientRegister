import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const getOwnUserService = async (id: any) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: id });
  return user;
};

export default getOwnUserService;
