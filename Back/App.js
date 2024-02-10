import express from "express";
import http from "http";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import UserRouter from "./Router/Router.js";
import cors from "cors"

const PORT = 5300

const app = express()
http.createServer(app)
app.use(bodyParser.json())
app.use(cors({origin: "*"}));
app.use(express.static('images'))
 

app.use('/api/',UserRouter)




mongoose.connect("mongodb://127.0.0.1:27017/bank")
.then(()=>{
    console.log('Data base Done!');
}).catch((er)=>{
    console.log("validation err is ",er);
})
app.listen(PORT,()=>{
   console.log(`PORT IS ${PORT}`)
})