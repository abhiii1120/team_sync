import { StatusCodes } from "http-status-codes";
import { success } from "zod";

const errorHandler = (err,req,res,next) => {

    res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        message:err.message || 'Internal server error',
        success:false,
        details:err.details || undefined,
    })
}

export default errorHandler