import { PostgresMoviesRentsRepository } from "../../repositories/implementations/SqliteMovieRentRepository";
import { PostgresUsersRepository } from "../../repositories/implementations/SqliteUsersRepository";
import { PostgresMoviesRepository } from "../../repositories/implementations/SqliteMoviesRepository";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";
import { CreateMovieRentController } from "./CreateMovieRentController";

const postgresMoviesRentsRepository = new PostgresMoviesRentsRepository();
const postgresUserRepository = new PostgresUsersRepository();
const postgresMoviesRepository = new PostgresMoviesRepository();

const createmovieRentUseCase = new CreateMovieRentUseCase(
  postgresMoviesRentsRepository,
  postgresUserRepository,
  postgresMoviesRepository
);

const createMovieRentController = new CreateMovieRentController(
  createmovieRentUseCase
);

export { createmovieRentUseCase, createMovieRentController };
