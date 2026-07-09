export default class AppError extends Error{
    constructor(message,statusCode,details=''){
        this.statusCode = statusCode;
        this.message = message;
        this.details = details;
        this.name = 'AppError';
    }
}