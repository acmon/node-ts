import { PostgresMoviesRepository } from "../../repositories/implementations/SqliteMoviesRepository";
import { CreateMovieController } from "./CreateMovieController";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

const postgresMoviesRepository = new PostgresMoviesRepository();

const createmovieUseCase = new CreateMovieUseCase(postgresMoviesRepository);

const createMovieController = new CreateMovieController(createmovieUseCase);

export { createmovieUseCase, createMovieController };
