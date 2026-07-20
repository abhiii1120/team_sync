import { StatusCodes } from "http-status-codes";
import UserRepo from "../../../repository/user.repository.js";
import AppError from "../../../shared/error/app.error.js";
import jwt from "jsonwebtoken";
import env from "../../../config/env.js";
import bcrypt from "bcrypt";
import NotFound from "../../../shared/error/NotFound.error.js";
import UnAuthorized from "../../../shared/error/UnAuthorized.error.js";

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

  tokenPayload(userData) {
    return {
      _id: String(userData._id),
      email: userData.email,
      name: userData.name,
      role: userData.role,
    };
  }

  async RegisterService(payload) {
    let user = {
      ...payload,
      email: payload.email.toLowerCase(),
    };

    const existingUser = await this.UserRepo.findByEmail(user.email);

    if (existingUser) {
      throw new AppError("User already exists", StatusCodes.CONFLICT);
    }

    let Hashpassword = await bcrypt.hash(user.password, 10);

    let newUser = await this.UserRepo.create({
      ...user,
      password: Hashpassword,
    });

    const tokenPayload = this.tokenPayload(newUser);

    const tokens = this.signTokens(tokenPayload);

    return { ...tokens, user: tokenPayload };
  }

  async LoginService(payload) {
    let email = payload.email.toLowerCase();

    const user = await this.UserRepo.findByEmail(email);

    if (!user) {
      throw new NotFound("User not found with this email.");
    }

    if (!user.password) {
      throw new UnAuthorized("This account is not enabled for password login");
    }

    let isMatch = await user.comparePassword(payload.password);

    if (!isMatch) {
      throw new UnAuthorized("Password doesn't match");
    }

    const tokenPayload = this.tokenPayload(user);
    const tokens = this.signTokens(tokenPayload);

    return { ...tokens, user: tokenPayload };
  }

  async getMe(token) {
    if (!token) {
      throw new NotFound("Token not found");
    }

    let user = jwt.verify(token, env.ACCESS_TOKEN_SECRET);
    return { user };
  }

  async refreshAccessToken(refreshToken) {
      if(!refreshToken) throw new error("Refresh token not found");

      const payload = jwt.verify(refreshToken,env.REFRESH_TOKEN_SECRET);
      const accessToken = jwt.sign(payload,env.ACCESS_TOKEN_SECRET);

      return {accessToken}
  }
}
