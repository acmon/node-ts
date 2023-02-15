import { Movie } from "../../entities/Movie";
import { prisma } from "../../prisma/client";
import { IMoviesRepository } from "../IMoviesRepository";

export class PostgresMoviesRepository implements IMoviesRepository {
  async findByTitle(title: string): Promise<Movie | null> {
    const movies = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    return movies;
  }

  async save(movie: Movie): Promise<void> {
    await prisma.movie.create({
      data: { ...movie },
    });
  }
}
