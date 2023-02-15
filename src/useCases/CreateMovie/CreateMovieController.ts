import { Request, Response } from "express";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

export class CreateMovieController {
  constructor(private createmovieUseCase: CreateMovieUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, duration, release_date } = request.body;

    try {
      await this.createmovieUseCase.execute({ title, duration, release_date });

      return response.status(201).send();
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
