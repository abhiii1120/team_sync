import helmet from "helmet";
import cors from "cors";
import env from "../config/env.js";
export default function securityMiddleware(app) {
  app.use(helmet());
  app.use(
    cors({
      origin: env.CORS_ORIGIN.split(",").map((origin) => origin.trim()),
      credentials: true,
    }),
  );
  
}
