import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String , 
        required : true , 
        unique : true
    } , 
    email : {
        type : String , 
        required : true , 
        unique : true
    } , 
    password : {
        type : String , 
        required : true , 
    } ,
    avatar : {
        type : String , 
        default : "https://qph.cf2.quoracdn.net/main-qimg-f6bcacabffd09f4e7b5dfdd97f8db6e0-lq" , 
    }
} , 
{
    timestamps : true
}) ;

const User = mongoose.model("User" , userSchema) ;

export default User ; 