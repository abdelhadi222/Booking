import { Link, useNavigate } from "react-router-dom";
import "../AcseUser/Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRotate } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
// import Cont from "./Cont";

export default function Login() {
    const nav  = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [er,setEr] = useState('')
     async function sup(event) {
        event.preventDefault()
        try{
            const res = await axios.post('http://localhost:5300/api/Login',{
                email:email,
                password:password
            })
            console.log(res);
            if(res.data ==401 ||res.data== "passwoed is wong"){
                return setEr(res.data)
            }
            window.localStorage.setItem('token',res.data.token)
             nav('/')
        }catch(err){
            console.log(err);
        }
      }
    return(
        <div className="parent">
            <form className="fefe" onSubmit={sup}>
                <FontAwesomeIcon icon={faCircleUser} style={{fontSize:'80px',marginBottom:'15px',paddingLeft:'170px'}}/>
                <div>
                    <input type="email" placeholder="Email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <input type="password" placeholder="password" value={password}
                     onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className="sa">Login</button>
            
                    <Link  style={{textAlign:'center',textDecoration:'none',marginRight:'200Px'}} to={"/sing"} >Creat Account</Link>     
                    <Link to={"/Confirmation"} style={{marginTop:"15px"}}>Forget Password?</Link>
                    

                    <div onClick={()=>window.history.back()} style={{display:"flex",gap:'10px',flexDirection:'row',marginTop:'20px',justifyContent:'center',width:"100%",height:"30PX",color:'white',borderRadius:'7px',padding:"10px",cursor:"pointer",background:'green'}}>
                        <FontAwesomeIcon icon={faRotate} />
                        <p style={{alignSelf:'center'}} >Return in The Laset Page</p>
                    </div>
                   
                {er == 401?<div style={{width:' fit-content',background:'black',color:'red',fontSize:'13px',padding:'6px',borderRadius:'10px'}}>your not user</div>:"" }
                {er == "passwoed is wong" ?<div style={{width:' fit-content',background:'black',color:'red',fontSize:'13px',padding:'6px',borderRadius:'10px'}}>your password is wongr</div>:"" }
            </form>
        </div>
    )
}