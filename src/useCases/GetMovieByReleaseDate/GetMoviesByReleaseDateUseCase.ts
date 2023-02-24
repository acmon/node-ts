import { IMoviesRepository } from "../../repositories/IMoviesRepository";

export class GetMoviesByReleaseDateUseCase {
  constructor(
    private movieRepository: IMoviesRepository,
  ) {}

  async execute() {
    const movieExists = await this.movieRepository.findByReleaseDate()
    return movieExists;
  }
}
