import helmet from "helmet";
import cors from "cors";
import env from "../config/env.js";
import ratelimit from 'express-rate-limit';


export default function securityMiddleware(app) {
  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGIN.split(",").map((origin) => origin.trim()),
      credentials: true,
    }),
  );
  app.use(
    ratelimit({
        windowMs:env.RATELIMIT_WINDOWS,
        limit:env.RATELIMIT,
        legacyHeaders:true,
        message:"too many request try again after few minutes",
    })
  )
}
