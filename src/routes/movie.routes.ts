import { Router } from "express";
import { createMovieController } from "../useCases/CreateMovie";
import { createMovieRentController } from "../useCases/CreateMovieRent";
import { getMoviesByReleaseDateController } from "../useCases/GetMovieByReleaseDate";

const movieRoutes = Router();

movieRoutes.get("/release", (request, response) => {
  return getMoviesByReleaseDateController.handle(request, response);
});

movieRoutes.post("/", (request, response) => {
  return createMovieController.handle(request, response);
});

movieRoutes.post("/rent", (request, response) => {
  return createMovieRentController.handle(request, response);
});

export { movieRoutes };
