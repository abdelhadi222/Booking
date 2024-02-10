import { useEffect, useState } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom"

export default function Requer({Role}) {
    const [user,setUser]  = useState('')
    useEffect(()=>{
        getUser()
    },[])
    const getUser = async ()=>{
        try{
             const res =  await axios.get("http://localhost:5300/api/User",{headers:{
             token:window.localStorage.getItem('token')
          }})
           setUser(res.data.user);
        }catch(err ){
            console.log("validation err is " , err);
        }
    }
    return  !user.isAdmin || user.isAdmin == undefined?<div>You have not Acsse for this fu***g page</div>:<Outlet/>
}