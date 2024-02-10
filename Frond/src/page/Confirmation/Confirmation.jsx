import "../Confirmation/Confirmation.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Confirmation() {
    const [test,setTest] = useState(true)
  
    return(
        <div>
             {
                test && 
                <div className="par">
                    <div className="div">
                       <h2>Enter Your Email : </h2>
                       <input type="email"/>
                       <button onClick={()=>setTest(false)}>Confirmation</button>
                  </div>
                </div>
             }



             {!test ? <div className="par">
                 <div className="div">
                    <h2>Number Confirmation in Your Email :</h2>
                       <input type="Number"/>
                       <Link className="jj" to={'/pass'}>Valide</Link>
                      </div>
             </div>:
                       ""
                      }                      
        </div>
    )
}