import { Link } from "react-router-dom"
import "../page/Confirmation/Confirmation.css"
export default function pass() {

    return(
       <div className="par">
         <div className="div">
            <h2>Your New Password do not forget Again!!</h2>
            <input type="password" placeholder="new password"/>
            <Link  className="jj" to={"/"}>Change</Link>
        </div>
       </div>
    )
}