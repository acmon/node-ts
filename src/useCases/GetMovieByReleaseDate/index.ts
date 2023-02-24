import { PostgresMoviesRepository } from "../../repositories/implementations/SqliteMoviesRepository";
import { GetMoviesByReleaseDateUseCase } from "./GetMoviesByReleaseDateUseCase";
import { GetMoviesByReleaseDateController } from "./GetMoviesByReleaseDateController";

const postgresMoviesRepository = new PostgresMoviesRepository();

const getmoviesByReleaseDateUseCase = new GetMoviesByReleaseDateUseCase(
  postgresMoviesRepository
);

const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController(
  getmoviesByReleaseDateUseCase
);

export { getmoviesByReleaseDateUseCase, getMoviesByReleaseDateController };
