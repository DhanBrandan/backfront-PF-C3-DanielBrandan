import { config } from "dotenv";

config() 

const env = {

PORT: process.env.PORT, //|| 4000 , Este es el puerto de Express
MONGO_URI: process.env.MONGO_URI, //|| "mongodb://localhost:27017":,
DATABASE_NAME: process.env.DATABASE_NAME, //|| "probando-23",
JWT_SECRET: process.env.JWT_SECRET,

}

export {env}
