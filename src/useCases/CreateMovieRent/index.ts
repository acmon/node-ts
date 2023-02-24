import { SqliteMoviesRentsRepository } from "../../repositories/implementations/SqliteMovieRentRepository";
import { SqliteUsersRepository } from "../../repositories/implementations/SqliteUsersRepository";
import { SqliteMoviesRepository } from "../../repositories/implementations/SqliteMoviesRepository";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";
import { CreateMovieRentController } from "./CreateMovieRentController";

const sqliteMoviesRentsRepository = new SqliteMoviesRentsRepository();
const sqliteUserRepository = new SqliteUsersRepository();
const sqliteMoviesRepository = new SqliteMoviesRepository();

const createmovieRentUseCase = new CreateMovieRentUseCase(
  sqliteMoviesRentsRepository,
  sqliteUserRepository,
  sqliteMoviesRepository
);

const createMovieRentController = new CreateMovieRentController(
  createmovieRentUseCase
);

export { createmovieRentUseCase, createMovieRentController };
