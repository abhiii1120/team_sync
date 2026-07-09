import express from 'express';
import errorHandler from './middleware/errorHandler.middleware.js';
import env from './config/env.js'
import morgan from 'morgan';
import authRoutes from './modules/public/auth/auth.routes.js'
import securityMiddleware from './middleware/security.middleware.js';
export default function createApp(){
    let app = express();

    if(env.NODE_ENV === 'development'){
        app.use(morgan("dev"));
    }

    securityMiddleware(app);

    app.use('/api/auth',authRoutes);
    app.use(errorHandler);

    return app;
}