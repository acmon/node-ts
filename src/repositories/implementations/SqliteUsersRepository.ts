import { User } from "../../entities/User";
import { prisma } from "../../prisma/client";
import { IUsersRepository } from "../IUsersRepository";

export class SqliteUsersRepository implements IUsersRepository {
  async getAll(): Promise<User[]|null> {
    const users = await prisma.user.findMany({
      include: {
        movie_rent: {
          select: {
            movie: {
              select: {
                title: true
              }
            }
          }
        }
      }
    });

    return users;
  }

  async findById(id: string): Promise<User|null> {
    const users = await prisma.user.findUnique({
      where: {
        id
      },
    })

    return users;
  }

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
