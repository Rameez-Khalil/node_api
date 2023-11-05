import express from "express";
import {
  authenticateUser,
  registerUser,
  updateProfile,
  logoutUser,
  getUserProfile,
} from "../controllers/userController.js";
const router = express.Router();

//Routes definition:
router.post("/", registerUser);
router.post("/auth", authenticateUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUserProfile).put(updateProfile);
export default router;
