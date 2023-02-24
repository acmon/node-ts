import { MovieRent } from "../../entities/MovieRent";
import { prisma } from "../../prisma/client";
import { IMoviesRentsRepository } from "../IMoviesRentsRepository";

export class SqliteMoviesRentsRepository implements IMoviesRentsRepository {
  async findFirstByMovieId(movieId: string): Promise<MovieRent|null> {
    const movieRent = await prisma.movieRent.findFirst({
      where: {
        movieId
      },
    })

    return movieRent;
  }

  async save(movieRent: MovieRent): Promise<void> {
    await prisma.movieRent.create({
      data: { ...movieRent }
    })
  }
}
