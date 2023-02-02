import AppDataSource from "../../data-source";
import { User } from "../../entities/user/user.entity";
import { IUserUpdate } from "../../interfaces/user/user";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";

const updateUserService = async (
  { name, email, password }: IUserUpdate,
  id: string,
  token: any
) => {
  const userInfo: any = jwt.decode(token);

  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id,
  });
  if (!findUser) {
    throw new Error("User not found");
  }
  if (userInfo?.sub != id) {
    throw new Error("User is not admin");
  }
  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
    createdAt: findUser.createdAt,
    id: findUser.id,
  });

  const user = await userRepository.findOneBy({ id });

  return user!;
};

export default updateUserService;
