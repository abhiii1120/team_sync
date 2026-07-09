export const app_config = {
    default:{
        PORT:3000,
        MONGO_URL:'mongodb://localhost:27017/teamSync',
        NODE_ENV:'development',
        RATELIMIT_WINDOWS:15 * 60 * 1000,
        RATELIMIT:100,
    },
    roles:{
       SUPER_ADMIN:'SUPER_ADMIN',
       ADMIN:'ADMIN',
       VISITOR:'VISITOR', 
    }
}