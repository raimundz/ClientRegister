import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user/user";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";

const updateUserService = async (
  name: string,
  email: string,
  password: string,
  tel: string,
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

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
    createdAt: findUser.createdAt,
    tel: tel ? tel : findUser.tel,

    id: findUser.id,
  });

  const user = await userRepository.findOneBy({ id });

  return user!;
};

export default updateUserService;
