import express from "express";
import { asyncHandler } from "../../../shared/utils/asyncHandler.js";
import AuthController from "./auth.controller.js";
import { validateRequest } from "../../../middleware/validateRequest.js";
import { registerSchema } from "./auth.validator.js";
let router = express.Router();
let authController = new AuthController();

router.get("/me", asyncHandler(authController.getMe.bind(authController)));
router.post(
  "/register",
  validateRequest(registerSchema),
  asyncHandler(authController.registerController.bind(authController)),
);

export default router;
