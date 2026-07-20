import express from "express";
import { asyncHandler } from "../../../shared/utils/asyncHandler.js";
import AuthController from "./auth.controller.js";
import { validateRequest } from "../../../middleware/validateRequest.js";
import { loginSchema, registerSchema } from "./auth.validator.js";
let router = express.Router();
let authController = new AuthController();

router.get("/me", asyncHandler(authController.getMe.bind(authController)));
router.post(
  "/register",
  validateRequest(registerSchema),
  asyncHandler(authController.registerController.bind(authController)),
);
router.post(
  "/login",
  validateRequest(loginSchema),
  asyncHandler(authController.LoginController.bind(authController)),
);
router.get(
  "/refreshAccessToken",
  asyncHandler(
    authController.refreshAccessTokenController.bind(authController),
  ),
);
export default router;
