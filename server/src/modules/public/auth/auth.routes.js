import express from "express";
import { asyncHandler } from "../../../shared/utils/asyncHandler.js";
import AuthController from "./auth.controller.js";

let router = express.Router();
let authController = new AuthController();

router.get("/me", asyncHandler(authController.getMe.bind(authController)));

export default router;
