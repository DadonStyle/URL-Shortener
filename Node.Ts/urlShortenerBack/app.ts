import express from 'express'
import db from "./db"
import dotenv from 'dotenv'
import morgan from 'morgan'
import routes from './routes/routes'
import cors from 'cors'

const myCors = cors({ origin: true })

//basic configurations
const app = express()
const config = dotenv.config();

//middleware
app.use(myCors)
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}));
app.use(express.json())

//server
app.listen(process.env.port, () => {
    console.log(`aplication listening at port ${process.env.port}`);
    routes(app);
    db();
})