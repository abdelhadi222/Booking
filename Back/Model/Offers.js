import mongoose from "mongoose";
const OffersModel = mongoose.Schema({
  offerName:{
    type:String,
    required:true
  },
  offerType:{
     type:Number,
  },
  price:{
    type:Number,
    required:true
  },
  des:{
    type:String
  },
  owner:{
     type:mongoose.Types.ObjectId,
     ref:'Hotel'
  }

})
export default mongoose.model('Offers',OffersModel)