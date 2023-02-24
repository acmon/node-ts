import { MovieRent } from "../../entities/MovieRent";
import { IMoviesRentsRepository } from "../../repositories/IMoviesRentsRepository";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateMovieRentDTO } from "./CreateMovieRentDTO";

export class CreateMovieRentUseCase {
  constructor(
    private movieRentRepository: IMoviesRentsRepository,
    private userRepository: IUsersRepository,
    private movieRepository: IMoviesRepository,
  ) {}

  async execute(data: ICreateMovieRentDTO) {
    const movieExists = await this.movieRepository.findById(data.movieId);
    if (!movieExists) {
      throw new Error("Movie does not exists.");
    }

    const movieAlreadyRented = await this.movieRentRepository.findFirstByMovieId(data.movieId);
    if (movieAlreadyRented) {
      throw new Error("Movie is already rented.");
    }

    const userExists = await this.userRepository.findById(data.userId);
    if (!userExists) {
      throw new Error("User already exists.");
    }

    const movieRent = new MovieRent(data);
    await this.movieRentRepository.save(movieRent);
  }
}
