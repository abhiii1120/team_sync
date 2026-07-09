import createApp from "./src/app.js";
import logger from "./src/config/logger.js";
import env from "./src/config/env.js";

let app = createApp();

function startServer(){
    app.listen(env.PORT,() => {
        logger.info({port:env.PORT},"server running on port")
    })
}

startServer();