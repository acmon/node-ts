import { Movie } from "../entities/Movie";

export interface IMoviesRepository {
  findById(id: string): Promise<Movie|null>;
  findByTitle(title: string): Promise<Movie|null>;
  findByReleaseDate(): Promise<Movie[]|null>;
  save(movie: Movie): Promise<void>;
}
