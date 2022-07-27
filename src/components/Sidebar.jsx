import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
// import { UilSignOutAlt } from "@iconscout/react-unicons";
import { Button ,Navbar,Form ,Alert} from 'react-bootstrap'
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useAuth } from '../context/AuthContext'
import { useNavigate} from 'react-router-dom'

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)
  const [error,setError] = useState("")
    const {currentUser , logout} = useAuth()
    const navigate = useNavigate()
   async function handleLogout(){
        setError("")
        try{
            await logout()
            navigate('/login')    
        }catch{
            setError("failed to Log out")

        }
    }
    function handleUpdate(){
        setError("")
        try{
            navigate('/updateprofile')    
        }catch{
            setError("failed to update")
        }
    }

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
        
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
         
         {error && <Alert variant="danger">{error}</Alert>}
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
         Firebase Auth
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <span>
        <Button variant="outline-success" disabled={currentUser.email === null} onClick={handleUpdate} >UpdateProfile</Button>
        </span> 
        <span>
          <Button  variant='link' onClick={handleLogout}>Log Out</Button>
          </span>
          
        <div className="menuItem">
        <Form  className="menu">
          <Navbar.Text>
            Signed in as: <a href="#login">{currentUser.email || currentUser.phoneNumber} </a>
            
          </Navbar.Text>
          </Form>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
