import { StatusCodes } from "http-status-codes";
import { setAuthCookies } from "../../../shared/utils/authCookies.js";
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import AuthService from "./auth.service.js";
export default class AuthController {
  constructor() {
    this.AuthService = new AuthService();
  }

  async getMe(req, res) {
    const token = req.cookies.accessToken;
    let { user } =  await this.AuthService.getMe(token);
    console.log(user);
    return buildSuccessResponse(res, "user verified", StatusCodes.OK, user);
  }

  async registerController(req, res) {
    const userData = req.validated.body;
    const { refreshToken, accessToken, user } =
      await this.AuthService.RegisterService(userData);

    setAuthCookies(res, accessToken, refreshToken);

    return buildSuccessResponse(
      res,
      "User created successfully",
      StatusCodes.CREATED,
      user,
    );
  }

  async LoginController(req, res) {
    const userData = req.validated.body;
    const { refreshToken, accessToken, user } =
      await this.AuthService.LoginService(userData);

    setAuthCookies(res, accessToken, refreshToken);

    return buildSuccessResponse(
      res,
      "User loggedin successfully",
      StatusCodes.CREATED,
      user,
    );
  }
}
