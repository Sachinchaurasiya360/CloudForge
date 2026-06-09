import bcrypt from "bcrypt";
import prisma from "../../Database/db.js";

export class AuthenticationService {
  constructor() {}

  async isEmailExists(email: string) {
    const isUserExist = await prisma.users.findFirst({ where: { email } });
    return isUserExist;
  }

  async registerUser(
    name: string,
    email: string,
    password: string,
  ): Promise<void> {
    const createUser = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);
    return hasedPassword;
  }
  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
