import { PostgresUsersRepository } from "../../repositories/implementations/SqliteUsersRepository";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase";
import { GetAllUsersController } from "./GetAllUsersController";

const sqliteUsersRepository = new PostgresUsersRepository();

const getallUsersUseCase = new GetAllUsersUseCase(
  sqliteUsersRepository
);

const getAllUsersController = new GetAllUsersController(
  getallUsersUseCase
);

export { getallUsersUseCase, getAllUsersController };
