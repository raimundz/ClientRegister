import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUserLogin } from "../../interfaces/session/session";

const sessionService = async (data: IUserLogin) => {
  const UserRepository = AppDataSource.getRepository(User);

  const user = await UserRepository.findOneBy({ email: data.email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const validPassword = await compare(data.password, user.password);

  if (!validPassword) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { email: user.email },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h", subject: user.id }
  );

  return token;
};

export default sessionService;
