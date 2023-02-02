import { User } from "../../entities/user/user.entity";
import bcrypt from "bcrypt";
import AppDataSource from "../../data-source";
import { IUserCreate } from "../../interfaces/user/user";

const createUserService = async ({
  name,
  email,
  password,
  tel,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email == email);

  if (emailAlreadyExists) {
    throw new Error("User already exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.tel = tel;
  user.createdAt = Date();

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default createUserService;
