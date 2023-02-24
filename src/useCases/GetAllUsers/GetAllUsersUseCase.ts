import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetAllUsersUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute() {
    return await this.usersRepository.getAll()
  }
}
