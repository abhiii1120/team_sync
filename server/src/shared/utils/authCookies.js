import { app_config } from "../../constants/app.constant.js"

export const setAuthCookies = (res,accessToken,refreshToken) => {
    const config = app_config;

    res.cookie('accessToken',accessToken,app_config.cookies.accessToken);
    res.cookie('refreshToken',refreshToken,app_config.cookies.refreshToken);
}