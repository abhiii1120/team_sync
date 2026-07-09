import dotenv from 'dotenv';
dotenv.config();
import z from 'zod';
import logger from './logger.js';
import { app_config } from '../constants/app.constant.js';

const envSchema = z.object({
    PORT: z.coerce.number().default(app_config.default.PORT),
    MONGO_URL:z.string().default(app_config.default.MONGO_URL),
});

const {success,data,error} = envSchema.safeParse(process.env);

if(!success){
    logger.info("invalid env varaibles",error.format());
    process.exit(1);
}

export default data;