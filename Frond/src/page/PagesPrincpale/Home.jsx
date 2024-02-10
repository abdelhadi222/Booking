import { Link } from "react-router-dom"
import Nav from "../../Componets/Nav/Nav"

import im2 from "../../img/i2.jpg"
import im3 from "../../img/i3.jpg"
import im5 from "../../img/two.jpg"
import {   useEffect, useState } from "react"
import axios from "axios"


export default function Home() {
  let arr = [im2,im3,im5]
  let [te,setTe] = useState('')
  let rand = 0
   function test() {
    return   Math.floor(Math.random() * arr.length)
  }

 
useEffect(()=>{
       rand = test();
       console.log(rand);
       document.querySelector('main').style = `background-image:url(${arr[rand]}`
},[])



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
    console.log('from Home' , user);

    return (
        <div>
             <div>
                 <Nav/>
                 <main style={{background:`url(${arr[0]}`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center'}}>
                   <div className="ddd">
                     <h2 style={{marginTop:'120px'}}>Enjoy With Your Travel {user?(user.sexe=="man"?<h3>Mr {user.name}</h3>:<h3>Mrs {user.name}</h3>):''}</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi optio est accusantium sit possimus harum praesentium corporis architecto autem ratione similique sed dolorum nostrum itaque quidem soluta, repellat laudantium perspiciatis.</p>
                      <Link to={"/Hotels"} className="bbb">Book Now</Link>
                    </div>
                 </main>
             </div>
        </div>
    )
}