import express from 'express';
import errorHandler from './middleware/errorHandler.middleware.js';

export default function createApp(){
    let app = express();

    app.use(errorHandler);

    return app;
}