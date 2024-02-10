import "../AcseUser/Login.css"
import { Link, useNavigate } from "react-router-dom"
import PhoneInput from 'react-phone-input-2'
import axios from "axios"
import 'react-phone-input-2/lib/style.css'
import { useState } from "react"

export default function Sing() {
  const nav = useNavigate()
  const [er,setEr] = useState('')
  const [form,setForm] = useState({
     name:"",
     email:"",
     dateN:"",
     password:"",
     sexe:""
  })
  const [phone,setPhone]  = useState('')
  console.log('phone is ',phone);
  function HandelChange(e) {
    setForm({...form,[e.target.name]:e.target.value})
  }

 async function sup(event) {
   event.preventDefault()
   try{
    const res = await axios.post("http://localhost:5300/api/Sing",{...form,phone:phone})
    console.log(res);
    if(res.data == 401){
        return setEr(res.data)
    }
    window.localStorage.setItem("token",res.data.token);
    nav('/Hotels')
   }catch(err){
    console.log("err is : ",err);
   }
  }

    return(
        <div style={{background:'rgb(228, 248, 248)', width:"100%",height:"100vh",paddingTop:'100px'
        }}>
           <form  className="forma" onSubmit={sup}>
              <div style={{padding:"20px"}}>
                <h2 style={{marginBottom:'30px'}}>Create Your Account Now!!</h2>
                <div style={{display:'flex',gap:'20px',width:"93%"}}>

                     <div style={{width:'50%'}}>
                      <input type="text" placeholder="name" name="name" value={form.name}
                      onChange={HandelChange}/>
                      </div>

                     <div style={{width:'50%'}}>
                      <input type="email" placeholder="email" name="email" value={form.email}
                      onChange={HandelChange}/>
                      </div>

                </div>
                <div>
                  <label>Date Of Your brithy : </label>
                  <input type="date" name="dateN" value={form.dateN}
                  onChange={HandelChange}/>
                  </div>
              

                <div>
                  <label>Your phone : </label>
                  <PhoneInput country="us"  value={phone}
                  onChange={(e)=>setPhone(e)} />
                </div>


                <div>
                  <input type="password" placeholder="Password"  name="password" value={form.password}
                  onChange={HandelChange}/>
                  </div>
                
                  <div><label >Your sexe : </label></div>
                  <div className="radio" style={{display:'flex',gap:"20px"}}>
                    <div>
                    <label style={{marginRight:'5px',}}>Man</label>
                      <input type="radio" name="sexe" value={"man"}  style={{width:"40px"}} 
                      onChange={HandelChange}/>
                    </div>
                    <div >
                    <label style={{marginRight:'5px'}}>Women</label>
                      <input type="radio" name="sexe" value={"women"} style={{width:"40px"}}
                      onChange={HandelChange} />
                    </div>
                   </div>
                
                   <button className="cre">Creat</button>
                  <div style={{width:'100%',height:'30px',padding:"4px",background:'green',marginTop:'10px',textAlign:'center',borderRadius:'20px'}}> <Link style={{textDecoration:'none',color:'white'}} to={"/"} >Return in page Home</Link>  </div>
                  {er == 401?<div style={{width:' fit-content',background:'black',color:'red',fontSize:'13px',padding:'6px',borderRadius:'10px'}}>this email Or phone is ready exist</div>:''}
              </div>
              <div className="backrou"></div>
              
           </form>
        </div>
    )
}