import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUsersRepository = new PostgresUsersRepository();
const mailtrapProvider = new MailtrapMailProvider();

const createuserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(
    createuserUseCase
)

export { createuserUseCase, createUserController }