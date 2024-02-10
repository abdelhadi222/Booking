import  express  from "express";
import {Sing ,Login,getUser,AddHotel,getAllHotels,comment,getOneHotel } from "../Controllers/controllers.js"
import path from "path"
import multer from "multer";

const UserRouter = express.Router()

// img Uplode : 
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images');
    },
    filename:(req,file,cb)=>{
        // const finame = `${Date.now()}_${file.originalname.replace(/\s+/g,'-')}`;
        cb(null,file.fieldname + "_"+ Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage:storage}).single('image') 




UserRouter.post('/Sing',Sing)
UserRouter.post('/Login',Login)
UserRouter.get('/User',getUser)
UserRouter.post('/AddHotel',upload,AddHotel)
UserRouter.get('/getAllHotels',getAllHotels)
UserRouter.post('/sendComment',comment)
UserRouter.get('/getOneHotel/:id',getOneHotel)






//  UserRouter.post('/AddHotel',upload,(req,res)=>{
//     const {file} = req
//     console.log(file);
//     console.log('file is ' , file );
//     res.send({
//         file : file.originalname,
//         path :file.path
//     })
//  })






export default UserRouter