import express from 'express';
import errorHandler from './middleware/errorHandler.middleware.js';
import env from './config/env.js'
import morgan from 'morgan';
import authRoutes from './modules/public/auth/auth.routes.js'
export default function createApp(){
    let app = express();

    if(env.NODE_ENV === 'development'){
        app.use(morgan("dev"));
    }

    app.use('/api/auth',authRoutes);
    app.use(errorHandler);

    return app;
}