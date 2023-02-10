import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(findByEmail: string): Promise<User>;
  save(user: User): Promise<void>;
}
