
import { Routes,Route } from "react-router-dom"
import "../src/App.css"
import Home from "./page/PagesPrincpale/Home"
import Hotels from "./page/PagesPrincpale/Hotels"
import Cont from "./page/PagesPrincpale/Cont"
import Login from "./page/AcseUser/Login"
import Confirmation from "./page/Confirmation/Confirmation"
import Sing from "./page/AcseUser/Sing"
import Pass from "./page/pass"
import AddHotel from "./page/AddHotel/AddHotel"
import Requer from "./page/Requer"
import DelatisOfHotel from "./page/DelatisOfHotel"
import HotelImage from "./page/pageHotel/HotelImage"



function App() {


  return (
    <>
    
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Hotels" element={<Hotels/>}/>
          <Route path="/Cont" element={<Cont/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Confirmation" element={<Confirmation/>}/>
          <Route path="/Sing" element={<Sing/>}/>
          <Route path="/pass" element={<Pass/>}/>
           
          <Route path="/Hotels/:id" element={<DelatisOfHotel/>}>
                 <Route path="HotelImage" element={<HotelImage/>}/>
          </Route>
          

           <Route element={<Requer Role={true}/>}>
                <Route path="/AddHotel" element={<AddHotel/>}/>
           </Route>

      </Routes>
    </>
  )
}

export default App
