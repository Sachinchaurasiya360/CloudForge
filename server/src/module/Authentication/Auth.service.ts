import { eq } from "drizzle-orm";
import { database } from "../../Database/index.js";
import { users } from "../../Database/schema.js";

import bcrypt from "bcrypt";
export class AuthenticationService {
  constructor() {}

  async isEmailExists(email: string) {
    const [user] = await database
      .select()
      .from(users)
      .where(eq(users.email, email));
    return user ?? null;
  }

  async registerUser(
    name: string,
    email: string,
    password: string,
  ): Promise<void> {
    const createUser = await database
      .insert(users)
      .values({ name, email, password });
    console.log(createUser);
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
