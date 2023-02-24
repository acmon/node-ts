import { MovieRent } from "../entities/MovieRent";

export interface IMoviesRentsRepository {
  findFirstByMovieId(movieId: string): Promise<MovieRent|null>;
  save(movieRent: MovieRent): Promise<void>;
}
