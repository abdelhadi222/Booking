import { useEffect, useState } from "react";
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRotateLeft, faHotel, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../page/Dela.css"
import { Link, NavLink, Outlet } from "react-router-dom";
import NavHote from "../Componets/Nav/NavHotel/NavHote";

export default function DelatisOfHotel() {
    return(
        <div  className='test' style={{background:'rgb(214, 255, 255)',width:'100%',height:'100vh',paddingTop:'40px'}}>
                  <NavHote/>
                  <Link to={"/Hotels"} style={{position:'absolute',left:'50px',top:'50Px',background:'aqua',width:'30px',height:'30px',borderRadius:"30px",display
                :'flex',justifyContent:'center',paddingTop:'5px',color:'black',cursor:'pointer',textDecoration:'none'}}><FontAwesomeIcon  icon={faArrowRotateLeft} /></Link>
              <div style={{width:"80%",margin:"0 auto"}}>
                  <Outlet/>
              </div>
              <Link to={"/Cont"} style={{background:'aqua',position:'absolute',bottom:"20px",right:'20Px',
              display:'flex',justifyContent:'center',alignItems:'center',boxShadow:'0px 0px 40px 0px aqua'
              ,width:'fit-content',height:'fit-content',padding:'15px',borderRadius:'50%',fontSize:'12px',color:'black',textDecoration:'none'}}
              ><FontAwesomeIcon icon={faPaperPlane} style={{marginRight:'5px'}} />Message</Link>
             
        </div>
    )
}


