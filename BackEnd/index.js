import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"

import { env } from "./src/settings/config.js" 
import { startConnection } from "./src/settings/database.js"
import { commentRouter } from "./src/routes/comment.routes.js"
import { postRouter } from "./src/routes/post.routes.js"
import { userRouter } from "./src/routes/user.routes.js"

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(helmet())

// B o d y
app.use(express.json())

// F o r m
app.use(express.urlencoded({extended: false}))

//R o u t e s
app.use('/comment' , commentRouter)    
app.use('/post' ,  postRouter)    
app.use('/user' , userRouter)    


app.listen(env.PORT, async () => {
    await startConnection();
    console.log(`Servidor Activo en el Puerto:  ${env.PORT}`);
});