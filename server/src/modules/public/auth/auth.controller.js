import { buildSuccessResponse } from "../../../shared/utils/buildSuccessResponse.js";

export default class AuthController{
    constructor(){

    }

    async getMe(req,res){
        return buildSuccessResponse(res,"user verified",req.user);
    }
}