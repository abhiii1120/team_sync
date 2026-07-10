import { StatusCodes } from "http-status-codes";
import UserRepo from "../../../repository/user.repository.js";
import AppError from "../../../shared/error/app.error.js";
import jwt from "jsonwebtoken";
import env from "../../../config/env.js";

export default class AuthService {
  constructor() {
    this.UserRepo = new UserRepo();
  }

  signTokens(data) {
    let refreshToken = jwt.sign(data, env.REFRESH_TOKEN_SECRET, {
      expiresIn: "30D",
    });
    let accessToken = jwt.sign(data, env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1H",
    });
    return { refreshToken, accessToken };
  }

  async CreateUser(payload) {
    let user = {
      ...payload,
      email: payload.email.toLowerCase(),
    };

    const existingUser = await this.UserRepo.findByEmail(user.email);

    if (existingUser) {
      throw new AppError("User already exists", StatusCodes.CONFLICT);
    }

    let newUser = await this.UserRepo.create(user);

    const tokenPayload = {
      _id: newUser._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const tokens = this.signTokens(tokenPayload);

    return { ...tokens, user: tokenPayload };
  }
}
