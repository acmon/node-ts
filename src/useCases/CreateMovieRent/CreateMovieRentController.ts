import { Request, Response } from "express";
import { CreateMovieRentUseCase } from "./CreateMovieRentUseCase";

export class CreateMovieRentController {
  constructor(private createmovieRentUseCase: CreateMovieRentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, movieId } = request.body;

    try {
      await this.createmovieRentUseCase.execute({ userId, movieId });

      return response.status(201).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
