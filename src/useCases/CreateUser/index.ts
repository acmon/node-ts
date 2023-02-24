import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { SqliteUsersRepository } from "../../repositories/implementations/SqliteUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const sqliteUsersRepository = new SqliteUsersRepository();
const mailtrapProvider = new MailtrapMailProvider();

const createuserUseCase = new CreateUserUseCase(
  sqliteUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(
    createuserUseCase
)

export { createuserUseCase, createUserController }