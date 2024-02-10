
import UserFromRes from "../Model/UserFromRes.js"
import HotelModel from "../Model/Hotel.js"
import commentModel from "../Model/comment.js"
import bcrypt from 'bcrypt';
 import  JWT from "jsonwebtoken"


export const Sing = async (req,res)=>{
    const {body} = req
    const {email,phone,password} = body
    
    
 try{
        const tetsEmail = await UserFromRes.find({$or:[{email:email},{phone:phone}]})
     if(tetsEmail.length != 0 ){
         return res.json(401)
     }
     const n = await UserFromRes.find()
         bcrypt.hash(password, 12 , async (err, ha) => {
           if(err){
             return res.json(err)
           }
  
         const createUser = await UserFromRes.create({...body,numAccount:n.length+1,password:ha})
        if(!createUser){
            return res.json('User Not Create')
        }
        const {_id} = createUser
                         
        const token = JWT.sign({id:_id},"keytoken")
        return res.json({data:createUser,token:token})
       }); 
 }catch(err){
    console.log("err is : ",err );
 }
}


export const Login = async (req,res)=>{
    const{body}  = req
    const{password,email} = body
    const check = await UserFromRes.find({email:email})
  
    if(check.length == 0){
        return res.json(401)
    }

    const {_id,password:password_db} = check[0]

    bcrypt.compare(password,password_db,(err,respondse)=>{
     if(err){
         return res.json(err)
       }
       if(!respondse){
         return res.json('passwoed is wong')
       }
       const token = JWT.sign({id:_id},"keytoken")
       
       return res.json({...body,token:token})
    })

}

export const getUser = async (req,res) =>{
  const {headers} = req
  const {token} = headers

  if(token == undefined) {
    return res.json('is no exist')
  }
  const confi = JWT.verify(token,'keytoken')
  const {id} = confi
  const usr = await UserFromRes.findOne({_id:id})
  if(!usr){
    return res.json('user Not found')
  }
  return res.json({message:true,user:usr})
} 


export const AddHotel = async (req,res)=>{
    const {file,body} = req
    console.log('body ,', body);
    console.log(file);
    const {filename} = file
try{
  const creatHotel =await HotelModel.create({...body,image:filename})
  if(!creatHotel){
    return res.json('hotel not Add')
  }
  return res.json({hotel:creatHotel})
}catch(err){
  console.log("err is ",err);
}
}

export const getOneHotel = async (req,res)=>{
   const {params} = req
   const {id} = params
   console.log(id);
try{
     const find = await HotelModel.findOne({_id:id})
   if(!find){
       return res.json(' Hotel not found')
   }
   return res.json(find)
}catch(err){
   res.json('err is ' , err)
}
}



export const getAllHotels = async (req,res)=>{
   try{
      const getAll = await HotelModel.find()
      console.log(getAll);
      if(!getAll)
      {
        return res.json('hotels not exist')
      }
      return res.json(getAll)
   }catch(err){
    console.log(err);
   }
}

export const comment = async (req,res)=>{
   const{headers,body} = req
   const {token} = headers
   const {text,email,name} = body

  try{
     const chekToken = JWT.verify(token,'keytoken')
   if(!chekToken){
    return res.json('Your token not true')
   }
   const {id} = chekToken
   const findYousr = await UserFromRes.findOne({_id:id})
   const {_id,email:email_db,name:name_db} = findYousr
      if(email != email_db || name !=name_db ){
          res.json('err your not cnx')
      }
   if(!findYousr){
    return res.json('user Not found')
   }
   const creComment = await commentModel.create({email:email,UserId:_id,Comment:text})
   if(!creComment){
    return res.json('cooment not create')
   }
   return res.json(200)
  }catch(err){
    console.log('validation err is ',err);
  }
  }
