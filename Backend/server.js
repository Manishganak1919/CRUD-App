import express from "express";
import dotenv from 'dotenv';
import Connection from "./database/db.js";
import router from "./routers/userRoutes.js";
import cors from 'cors';

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);
app.use(router);


