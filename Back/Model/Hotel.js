import mongoose from "mongoose";
const HotelModel = mongoose.Schema({
    name:{
     type:String,

    },
    adr:{
        type:String,
        
    },
    des:{
        type:String
    },
    star:{
        type:String,
       
    },
    image:{
        type:Object
    },
    AllImages:{
        type:[
            {type:String}
        ]
    },
    // AllImg:{
    //     type:String
    // },
    Rating:{
        type:String
    },
    Location :{
        type:String
    }
  
})
export default mongoose.model('Hotel',HotelModel)