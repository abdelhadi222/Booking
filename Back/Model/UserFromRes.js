import mongoose from "mongoose";
const UserFromRes = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
       
    },
    phone:{
        type:String,
        required:true,
        unique:true,
        minLength: 9
    },
    birthday:{
        type:Number,
    },
    numAccount:{
        type:Number,
        required:true,
        unique:true
    },
    numCard:{type:Number},
    isAdmin:{
        type:Boolean,
        default:false
    },
    sexe:{
        type:String
    },
    creat:{
        type:Date,
        default:()=> new Date()
    }
})
export default mongoose.model('UserFromRes',UserFromRes)