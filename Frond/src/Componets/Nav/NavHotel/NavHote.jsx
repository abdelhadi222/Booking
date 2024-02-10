import { NavLink } from "react-router-dom"
export default function NavHote() {
    
    return(
         <div className="button-container">
                         <NavLink to={'HotelImage'}  style={{textDecoration:'none'}} className="button">Images</NavLink>
                         <NavLink to={'HotelOffer'} style={{textDecoration:'none'}} className="button">Offer</NavLink>
                         <NavLink   to={'HotelRoom'} style={{textDecoration:'none'}} className="button">Room</NavLink>
                         <NavLink  to={'HotelPrice'} style={{textDecoration:'none'}}className="button">Price</NavLink>
                 </div>
    )
}