import express from "express";
import { getMe, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

//routes to get current user
router.get("/me", protectRoute, getMe);

// routes for all post methods
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;