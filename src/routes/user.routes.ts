import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";

const userRoutes = Router();

userRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

export { userRoutes };
