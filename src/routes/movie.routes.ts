import { Router } from "express";
import { createMovieController } from "../useCases/CreateMovie";

const movieRoutes = Router();

movieRoutes.post("/", (request, response) => {
  return createMovieController.handle(request, response);
});

export { movieRoutes };
