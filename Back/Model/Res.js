import mongoose from "mongoose";
const ResModel = mongoose.Schema({
    userId:{
        type:Number,
        required:true
    },
    hotelId:{
        type:Number,
        required:true
    },
    offerId:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        require:true
    },
    stpay:{
        type:Boolean,
    },
    dateIn:{
        type:Date
    },
    dateOut:{
       type:Date
    },
    creat:{
     type:Date,
     default:()=>new Date()
    }
})
export default mongoose.model('Res',ResModel)