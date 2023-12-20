import { connect } from "mongoose";
import { env } from "./config.js";

const startConnection = async () => {
  try {
    const db = await connect(env.MONGO_URI, {
      dbName: env.DATABASE_NAME,
      /* user: env.DB_USER,  // Nombre de usuario de la base de datos
      pass: env.DB_PASSWORD, */  // Contraseña de la base de datos
    });
    console.log("Estamos conectados a:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};

export {startConnection}