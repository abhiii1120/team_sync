import { StatusCodes } from "http-status-codes";
import { setAuthCookies } from "../../../shared/utils/authCookies.js";
import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";
import AuthService from "./auth.service.js";
export default class AuthController{
    constructor(){
        this.AuthService = new AuthService();
    }

    async getMe(req,res){
        return buildSuccessResponse(res,"user verified",req.user);
    }

    async registerController (req,res){
        const userData = req.validated.body;
        const { refreshToken,accessToken,user } = await this.AuthService.CreateUser(userData);

        setAuthCookies(res,accessToken,refreshToken);

        return buildSuccessResponse(res,'User created successfully',StatusCodes.CREATED);
    }
}