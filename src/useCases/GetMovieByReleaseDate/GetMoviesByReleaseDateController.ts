import { Request, Response } from "express";
import { GetMoviesByReleaseDateUseCase } from "./GetMoviesByReleaseDateUseCase";

export class GetMoviesByReleaseDateController {
  constructor(private getmovieByReleaseDateUseCase: GetMoviesByReleaseDateUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.getmovieByReleaseDateUseCase.execute();

      return response.status(201).json(result);
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
