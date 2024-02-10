import { faArrowRight, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


export default function HotelAfich(props) {

    // const {name,des,star,image,Rating,adr} = props
     const {Hotel} = props
     let el = []
         for (let i = 0; i < parseInt(Hotel.star); i++) {
             el.push(i)
         }

         console.log(Hotel);



 
    return(
        <div style={{width:'90%',background: "white",color:'black',border:"1px solid black ",borderRadius:'10px',height:'230px',display:'flex',flexDirection:"row",alignSelf:'center'}}>
           <div style={{width:'50%',background:'black',borderRadius:'10px 0 0 10px',backgroundImage:`url(http://localhost:5300/${Hotel.image})`,backgroundSize:'cover',backgroundPosition:'center center'}}></div>
          <div style={{width:'50%',padding:'15px'}}>

            <div style={{display:'flex',gap:'20px',justifyContent:"space-between",marginBottom:'10px'}}>
                <h2 style={{color:'rgb(14, 191, 255)'}}>Hotel {Hotel.name}</h2>
                   <div style={{display:'flex'}}>
                      {
                       el.map((e,i)=>{
                          return <p key={i} style={{alignSelf:'center'}}><FontAwesomeIcon icon={faStar} style={{color: "#def56b",}} /></p>
                       })
                      }
                   </div>
                 
                </div>

                <div style={{marginTop:'13px'}}>
                    <FontAwesomeIcon icon={faLocationDot}  style={{marginRight:'10px'}}/>{Hotel.adr} 
                </div>

                  <div style={{marginTop:'13px',marginBottom:'10px',fontSize:"12px"}}>
                    {Hotel.des} 
                </div>
                <div style={{marginBottom:'15px',marginTop:'20px'}}>
                   <h3> $50 One Night per Person</h3>
                </div>

                   {/* <iframe src={Hotel.Location} style={{width:'100%',height:'50px'}}>Gfffffo</iframe> */}

                <div style={{display:'flex',justifyContent:'space-between',marginTop:'45px'}}>
                     <Link to={`${Hotel._id}`}  className="vvv" style={{
                        width:"23%",
                        height:'30px',
                        padding:"6px",
                        display:'flex',
                        gap:'10px',
                        borderRadius:'10px',
                        background:'rgb(79, 201, 249)',
                        color:'white',border:'none',cursor:'pointer',textDecoration:'none',fontSize:'14px'
                     }}
                     ><p>Show More </p> <FontAwesomeIcon icon={faArrowRight} className="anima" style={{alignSelf:'center'}} /></Link>
                     <div style={{display:'flex',gap:'6px'}}>
                        <p style={{width:'35PX',display:'flex',justifyContent:'center',alignItems:'center',background:'rgb(137, 172, 207)',color:'white',borderRadius:'7px'}}>{Hotel.Rating}</p>
                         {
                          parseInt(Hotel.Rating) <= 3 ?<p style={{color:'red',alignSelf:'center'}}>Bad</p>: parseInt(Hotel.Rating) <6 &&parseInt(Hotel.Rating)>3 ?<p style={{color:'orange',alignSelf:'center'}}>Meduim</p>: parseInt(Hotel.Rating)<8 && parseInt(Hotel.Rating)>6?<p style={{color:'green',alignSelf:'center'}}>Bien</p>:parseInt(Hotel.Rating)<10&&parseInt(Hotel.Rating)>7?<p style={{color:'green',alignSelf:'center'}}>excllent</p>:""
                         }
                     </div>
                </div>


          
        
          </div>
        </div>
    )
}