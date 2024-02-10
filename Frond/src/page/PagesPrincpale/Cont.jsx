import { Link } from "react-router-dom"
import Nav from "../../Componets/Nav/Nav"
import "../PagesPrincpale/Conta.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPaperPlane }from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { useState } from "react"

export default function Cont(){
   const  [text,setText] = useState('')
   const  [name,setName] = useState('')
   const  [email,setEmail] = useState('')
   const  [er,setEr] = useState('')
   async function sendData(event) {
        event.preventDefault()
       try{
          const res  = await axios.post('http://localhost:5300/api/sendComment',{
            text:text,
            name:name,
            email:email
         },{headers:{token:window.localStorage.getItem('token')}})
         if(res.data == "err your not cnx"){
            setEr(res.data)
         }
          window.history.back()
       }catch(err){
         console.log(err);
       }
   }
    return(
        
    <div>
        <Nav/>
         <form className="isForm" onSubmit={sendData}>
            <h2>Contac <span>Us</span></h2>
            <div className="total">
                 <div>
                    <label>Your name : </label>
                    <input type="text" placeholder="Your Name " value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                 </div>
                 <div>
                    <label>Your Email : </label>
                    <input type="email" placeholder="Your Email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                 </div>
                 <div>
                    <textarea name="text" placeholder=" Entre Your message " value={text}
                    onChange={(e)=>setText(e.target.value)}></textarea>
                 </div>
                   <button style={{display:'flex',alignItems:"center",marginTop:"10px",
                      border:"none",padding:"8px",gap:'10px',borderRadius:'25px',fontSize:'15px',cursor:"pointer",background:'rgb(0, 162, 255)',color:'white',marginLeft:"100PX"
                    }}><FontAwesomeIcon  icon={faPaperPlane}  /><p >Send</p></button>
                 {/* <div style={{display:'flex'}}>
                    <Link to='https://www.instagram.com/travelandleisure/?hl=fr'></Link>
                 </div> */}
                 {er=='err your not cnx'&&<div style={{width:' fit-content',background:'black',color:'red',fontSize:'13px',padding:'6px',borderRadius:'10px'}}>your email is worng or your name</div>}
                 
                 

            </div>
         </form>
    </div>
    )

}