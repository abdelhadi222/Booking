// import img from "../../img/LOGOTRAVEL.jpg"
import { Link, NavLink } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleUser} from "@fortawesome/free-solid-svg-icons"
import "../Nav/Nav.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Nav() {
   const [data,setData] = useState()
   const [message,setMesasge] = useState("")
   useEffect(()=>{
     getUser()
   },[data])
   async function getUser() {
      
      try{
          const res =  await axios.get("http://localhost:5300/api/User",{headers:{
             token:window.localStorage.getItem('token')
          }})
         
          setMesasge(res.data.user);
      }catch(err){
         console.log(err.message);
      }
   }

   function logout() {
      window.localStorage.removeItem('token');
      setData(per=>per+1)
   }


    return (
        <>
           <header>
              <div style={{display:'flex',gap:"5px",width: "50%"}}>
                <img style={{width:"50px",height:"50Px",borderRadius:'50%'}} src="https://img.freepik.com/vecteurs-libre/logo-voyage-detaille_23-2148616611.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais" alt="" />
                <h2 style={{alignSelf:'center'}}><span style={{color:'#0075ff',fontSize:"36Px"}}>T</span>ravel</h2>
              </div>
            
              <div style={{display:'flex',justifyContent:"space-between",width:"50%"}} >
                 <div style={{display:'flex',gap:"20px",background:"white"}} className="lesLink">
                     <NavLink className="lesLink" to={"/"}>Home</NavLink>
                     <NavLink className="lesLink" to={"/Hotels"}>Hotels</NavLink>
                     <NavLink  className="lesLink" to={"/Cont"}>Contact Us </NavLink>
                      {message?(message.isAdmin?<NavLink  className="lesLink" to={"/AddHotel"}>Add Hotel  </NavLink>:""):""}
                </div>

                 {message?
                   <div  style={{
                  alignSelf:'center',width:"20%",height:'30PX',
                  background:"red",marginRight:'-10px',
                  borderRadius:'8px 0px 0px 8px',color:'white',padding:'7px',display:'flex',gap:'10px'}} >
                     <FontAwesomeIcon icon={faCircleUser} />
                     <Link to={"/"}  onClick={logout}  style={{textDecoration:'none',color:'white'}}>LogOut</Link>
                 </div>
                 :
                  <div  style={{
                  alignSelf:'center',width:"20%",height:'30PX',
                  background:"rgb(0, 162, 255)",marginRight:'-10px',
                  borderRadius:'8px 0px 0px 8px',color:'white',padding:'7px',display:'flex',gap:'10px'}} >
                     <FontAwesomeIcon icon={faCircleUser} />
                     <Link to={"/Login"} onClick={logout}  style={{textDecoration:'none',color:'white'}}>Login</Link>
                 </div>
               
                 }

              </div>
           </header>
        </>
    )
}