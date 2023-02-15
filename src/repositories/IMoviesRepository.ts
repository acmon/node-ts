import { Movie } from "../entities/Movie";

export interface IMoviesRepository {
  findByTitle(title: string): Promise<Movie|null>;
  save(movie: Movie): Promise<void>;
}
