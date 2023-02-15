import { Movie } from "../../entities/Movie";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { ICreateMovieRequestDTO } from "./CreateMovieDTO";

export class CreateMovieUseCase {
  constructor(
    private moviesRepository: IMoviesRepository
  ) {}

  async execute(data: ICreateMovieRequestDTO) {
    const movieAlreadyExists = await this.moviesRepository.findByTitle(data.title);

    if (movieAlreadyExists) {
      throw new Error("user already exists.");
    }

    const movie = new Movie(data);
    await this.moviesRepository.save(movie);
  }
}
