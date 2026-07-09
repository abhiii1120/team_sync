import { StatusCodes } from "http-status-codes";
import { success } from "zod";

const errorHandler = () => {

    res.status(err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        message:err.message || 'Internal server error',
        success:false,
        details:err.details || undefined,
    })
}

export default errorHandler