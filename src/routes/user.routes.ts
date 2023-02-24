import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";
import { getAllUsersController } from "../useCases/GetAllUsers";

const userRoutes = Router();

userRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

userRoutes.get("/", (request, response) => {
  return getAllUsersController.handle(request, response);
});

export { userRoutes };
