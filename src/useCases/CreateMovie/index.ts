import { SqliteMoviesRepository } from "../../repositories/implementations/SqliteMoviesRepository";
import { CreateMovieController } from "./CreateMovieController";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

const sqliteMoviesRepository = new SqliteMoviesRepository();

const createmovieUseCase = new CreateMovieUseCase(sqliteMoviesRepository);

const createMovieController = new CreateMovieController(createmovieUseCase);

export { createmovieUseCase, createMovieController };
