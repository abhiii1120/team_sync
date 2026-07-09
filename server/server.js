import createApp from "./src/app.js";
import logger from "./src/config/logger.js";
let app = createApp();

function startServer(){
    app.listen(3000,() => {
        logger.info({port:3000},"server running on port")
    })
}

startServer()