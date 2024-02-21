
import express from "express"
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRouter from "./routes/user.auth.js"
dotenv.config() ;

const app = express() ;  

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to  MONGO-DB !!") ;
}).catch((err) => {
    console.log(err) ; 
}) ; 

app.get("/" , (req , res) => {
    res.send("Server is Ready") ; 
}) ;

const port = process.env.PORT || 3000 ; 
app.use(express.json()) ; 
app.use("/api/auth" , authRouter) ;

app.listen(port , ()=>{
    console.log(`Server is running at port : ${port}`) ;
})