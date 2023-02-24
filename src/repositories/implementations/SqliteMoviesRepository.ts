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

  async findById(id: string): Promise<Movie | null> {
    const movie = await prisma.movie.findUnique({
      where: {
        id
      },
    });

    return movie;
  }

  async findByReleaseDate(): Promise<Movie[]|null> {
    const movies = await prisma.movie.findMany({
      orderBy: {
        release_date: 'desc'
      },
      include: {
        movie_rent: {
          select: {
            user: {
              select: {
                name: true,
                email: true
              }
            }
          }
        }
      }
    });

    return movies;
  }

  async save(movie: Movie): Promise<void> {
    await prisma.movie.create({
      data: { ...movie },
    });
  }
}
