import { SqliteMoviesRepository } from "../../repositories/implementations/SqliteMoviesRepository";
import { GetMoviesByReleaseDateUseCase } from "./GetMoviesByReleaseDateUseCase";
import { GetMoviesByReleaseDateController } from "./GetMoviesByReleaseDateController";

const sqliteMoviesRepository = new SqliteMoviesRepository();

const getmoviesByReleaseDateUseCase = new GetMoviesByReleaseDateUseCase(
  sqliteMoviesRepository
);

const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController(
  getmoviesByReleaseDateUseCase
);

export { getmoviesByReleaseDateUseCase, getMoviesByReleaseDateController };
