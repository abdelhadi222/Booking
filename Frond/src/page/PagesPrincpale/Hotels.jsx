 import Nav from "../../Componets/Nav/Nav"
import "../PagesPrincpale/C&H&H.css"

import im2 from "../../img/i4.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMagnifyingGlassLocation, faMapLocationDot, faPlaneArrival, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import axios from "axios"
import HotelAfich from "../../Componets/Nav/HotelAfich/HotelAfich"




export default  function Hotels(){
  const [num,setNum] = useState('')
      
   const[dd,setDd] = useState({})
  useEffect(()=>{
   getAllHotels()
  },[num])
  async function getAllHotels() {
     try {
       const res = await axios.get('http://localhost:5300/api/getAllHotels')
       console.log(res);
           setDd(res.data);
          console.log('data is , ',res.data);
       } catch (error) {
       console.error(error);
     }
  }

  console.log(dd);
    return (
      <div >
           <Nav/>
            <div>
             <div className="bk" style={{ backgroundImage:`url(${im2})`,width:"100%",height:"300px",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',zIndex:"4"}}
             >
                <div className="dkhl">
                  <h1>Book Here : </h1>
                  <form className="iii" >
                      <div style={{position:'relative'}}>
                        <label>Your destination : </label>
                        <FontAwesomeIcon icon={faMapLocationDot} style={{position:'absolute',right:'10PX',top:"34px"}} />

                        <input type="text" placeholder='Your destination'/>
                      </div>
                      <div style={{position:'relative'}}>
                         <label>Date Out  : </label>
                         <FontAwesomeIcon icon={faPlaneDeparture}  style={{position:'absolute',right:'30PX',top:"34px"}} />
                          
                         <input type="date" />
                      </div>
                      <div style={{position:'relative'}}>
                         <label>Date In : </label>
                          <FontAwesomeIcon icon={faPlaneArrival}  style={{position:'absolute',right:'30PX',top:"34px"}} />
                         <input type="date"/>
                      </div>
                      <button style={{display:'flex',alignItems:"center",marginTop:"30px",
                      border:"none",padding:"8px",gap:'10px',borderRadius:'25px',fontSize:'15px',cursor:"pointer",background:'rgb(0, 162, 255)',color:'white'
                    }}><FontAwesomeIcon  icon={faMagnifyingGlassLocation} /><p>Search</p></button>
                  </form>
                </div>
             </div>
             {/* {componets} */}
{/* key={i} name={e.name} des={e.des} star={e.star}
                      image={e.image}  Rating={e.Rating} adr={e.adr}  */}
             <div style={{width:'100%',gap:'20px',height:' fit-content',padding:"20px",background:"white",display:'flex',justifyContent:"center",flexDirection:'column'}}>
                {
                   dd && dd.length >0 ? dd.map((e,i)=>{
                    return  <HotelAfich  Hotel={e}   key={i}/>
                  }):""
                }
             </div>
              
                

              
        </div>
      </div>
    )
}