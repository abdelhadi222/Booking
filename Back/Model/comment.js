import mongoose from "mongoose";
const commentModel = mongoose.Schema({
    Comment:{
        type:String
    },
    UserId:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    }


})
export default mongoose.model('comment',commentModel)