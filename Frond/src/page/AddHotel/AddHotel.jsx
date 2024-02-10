import { Form, Link, useNavigate } from "react-router-dom"
import "../AddHotel/AddHotel.css"
import { useState } from "react"
import axios from "axios"
export default function AddHotel () {

  const nav = useNavigate()
       const [form,setForm] = useState({
         name:"",
         adr:"",
         des:"",
         star:"",
         Rating:"",
         Location:"",
        //  AllImg:""
       })
       const [image,setImage] = useState({})
       console.log(image);
        function HandelChange(e) {
    setForm({...form,[e.target.name]:e.target.value})
  }

 function  imageChange(e) {
   setImage(e.target.files[0])
 }



  async function sup(event) {
      let data = new FormData()
      data.append("name",form.name)
      data.append("adr",form.adr)
      data.append("des",form.des)
      data.append("star",form.star)
      data.append("Rating",form.Rating)
      data.append("image",image)
      data.append("Location",form.Location)
     
console.log(data.get('image'));
   event.preventDefault()
   try{
    const res = await axios.post("http://localhost:5300/api/AddHotel",data)
     nav('/')
   }catch(err){
    console.log("err is : ",err);
   }
  }

  console.log(image);

    return(
        <div style={{display:'flex',justifyContent:'center',paddingTop:'100px'}}>
              <form className="Addhotal" onSubmit={sup}>
                  <h2>Add Hotel : </h2>
                  <div style={{width:'99%'}}>
                    <input type="text" placeholder="Name of Hotel "  style={{width:'48%',marginRight:'15px'}} 
                    value={form.name} onChange={HandelChange} name="name"   />
                     <input type="text" placeholder="Adr of Hotel " style={{width:'48%'}}
                     value={form.adr} onChange={HandelChange}   name="adr"  />
                  </div>

                    <div style={{width:'99%'}}>
                    <input type="text" placeholder="des of Hotel "  style={{width:'48%', marginRight:'15px'}}
                    value={form.des} onChange={HandelChange}  name="des"  maxLength='80'  />
                     <input type="text" placeholder="Number star "   style={{width:'48%'}}
                     value={form.star} onChange={HandelChange}  name="star"    />
                  </div>

                      
                      <div style={{width:'99%'}}>
                        <input type="text" placeholder="Rating " style={{width:'99%'}}
                        value={form.Rating} onChange={HandelChange}   name="Rating"  />
                     </div>

                      <div style={{width:'99%'}}>
                        <input type="text" placeholder="Location" style={{width:'99%'}}
                        value={form.Location} onChange={HandelChange}   name="Location"   />
                     </div>

                     {/* <div style={{display:'flex',flexDirection:"column"}}>
                    <label >Promo couple: </label>
                    <input type="Number" placeholder="promo"  name='Promo' value={promo}
                    onChange={(e)=>setPromo(e.target.value)} />
                   </div>

                     <div style={{display:'flex',flexDirection:"column"}}>
                    <label >Promo enfants: </label>
                    <input type="Number" placeholder="promo"  name='Promo' value={promo}
                    onChange={(e)=>setPromo(e.target.value)} />
                   </div> */}
                   {/* <div style={{display:'flex',flexDirection:"column"}}>
                    <label >Promo enfnts: </label>
                    <input type="Number" placeholder="promo"  name='Promo'
                    onChange={imageChange} />
                   </div> */}




                   <div style={{display:'flex',flexDirection:"column"}}>
                    <label >Img prancipel: </label>
                    <input type="file" placeholder="img princepal "  name='file'
                    onChange={imageChange} />
                  </div>

                   {/* <div style={{display:'flex',flexDirection:"column"}}>
                     <label >Other img of Hotel: </label>
                    <input type="file" placeholder="img princepal "  />
                  </div> */}

                 

                  <button type="submit" className="AddH">Add Hotel </button>
                 <div style={{display:"flex",gap:'10px',flexDirection:'row',marginTop:'10px',justifyContent:'center',width:"99%",height:"30PX",borderRadius:'7px',padding:"5px",cursor:"pointer",background:'green'}}>
                     <Link to={"/"} style={{textDecoration:"none",color:'white'}}>Go To page Home</Link>
                 </div>


                  
              </form>
        </div>
    )
}