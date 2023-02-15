import { User } from "../../entities/User";
import { prisma } from "../../prisma/client";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User|null> {
    const users = await prisma.user.findUnique({
      where: {
        email
      },
    })

    return users;
  }

  async save(user: User): Promise<void> {
    await prisma.user.create({
      data: { ...user }
    })
  }
}
