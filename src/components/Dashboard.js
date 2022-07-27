import React from 'react'
// import { Button ,Navbar ,Nav ,Container ,Form ,Alert} from 'react-bootstrap'
// import { useNavigate} from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
import "../style.css"
import "../App.css"
import MainDash from './MainDash/MainDash';
import RightSide from './RigtSide/RightSide';
import Sidebar from './Sidebar';

export default function Dashboard() {


  return (
      <>
      {/* <div className='back'> */}
      <div className="App">
      <div className="AppGlass">
    
        <Sidebar/>
        <MainDash/>
        <RightSide/>

      
        </div>
        </div>
      </>   
  )
}
