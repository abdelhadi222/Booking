import { useEffect, useState } from "react";

import axios from "axios";
import "../../page/pageHotel/Image&Price&.css"

export default function HotelImage() {
       const [data,setData] = useState("")
    const key = location.href.replace("http://localhost:5173/Hotels/","").replace('/HotelImage','')

 useEffect(()=>{
   getAllHotels()
  },[])
  async function getAllHotels() {
     try {
       const res = await axios.get(`http://localhost:5300/api/getOneHotel/${key}`)
         console.log(res);
          setData(res.data);
       } catch (error) {
       console.error(error);
     }
  }
   return(
     <div>
          <section>
             <div className="section" style={{background:`url(http://localhost:5300/${data.image})`}}>

             </div>
          </section>
     </div>
   )   
}