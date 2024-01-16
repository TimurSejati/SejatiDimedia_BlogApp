import express from "express";
const routes = express.Router();
import {
  loginUser,
  registerUser,
  userProfile,
} from "../controllers/userControllers.js";
import { authGuard } from "../middleware/authMiddleware.js";

routes.post("/register", registerUser);
routes.post("/login", loginUser);
routes.get("/profile", authGuard, userProfile);

export default routes;
