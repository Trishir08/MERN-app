
import express from "express"
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const app = express() ;  

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MONGO-DB !!") ;
}).catch((err) => {
    console.log(err) ; 
}) ; 

app.get("/" , (req , res) => {
    res.send("Server is Ready") ; 
}) ;

const port = process.env.PORT || 3000 ; 

app.listen(port , ()=>{
    console.log(`Server is running at port : ${port}`) ;
})