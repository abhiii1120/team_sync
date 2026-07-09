export const app_config = {
    default:{
        PORT:3000,
        MONGO_URL:'mongodb://localhost:27017/teamSync',
        NODE_DEV:'development',
    },
    roles:{
       SUPER_ADMIN:'SUPER_ADMIN',
       ADMIN:'ADMIN',
       VISITOR:'VISITOR', 
    }
}