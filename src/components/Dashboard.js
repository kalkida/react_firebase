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

//     const [error,setError] = useState("")
//     const {currentUser , logout} = useAuth()
//     const navigate = useNavigate()
//    async function handleLogout(){
//         setError("")
//         try{
//             await logout()
//             navigate('/login')    
//         }catch{
//             setError("failed to Log out")

//         }
//     }
//     function handleUpdate(){
//         setError("")
//         try{
//             navigate('/updateprofile')    
//         }catch{
//             setError("failed to update")
//         }
//     }
  return (
      <>
      {/* <div className='back'> */}
      <div className="App">
      <div className="AppGlass">
       {/* <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Firebase Auth </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Services</Nav.Link>
            <Nav.Link href="#" disabled>
              Account
            </Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-end mx-4" style={{margin: "5px"}}>
          <Navbar.Text>
            Signed in as: <a href="#login">{currentUser.email || currentUser.number} </a>
          </Navbar.Text>
            <Button variant="outline-success" disabled={currentUser.email === null} onClick={handleUpdate} >UpdateProfile</Button>
            <Button  variant='link' onClick={handleLogout}>Log Out</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
        <Sidebar/>
        <MainDash/>
        <RightSide/>

      {/* <nav>
              <img src={logo} alt= "Logo" className='nav--icon'/>         
              <h3 >Dashboard</h3>
              {error && <Alert variant="danger">{error}</Alert>}
              <h4 className='nav-mail'>Email: {currentUser.email || currentUser.number} </h4>
              <div className='nav--link'>
              <Button disabled={currentUser.email === null} variant='link' onClick={handleUpdate}>UpdateProfile</Button>
              </div>
             <div className='nav--link'>
          <Button  variant='link' onClick={handleLogout}>Log Out</Button>
          </div>
          </nav> */}
          {/* <div className='header-overlay'>
          <header>
              <div className='container'>
                  <div className='row'>
                      <div className='col-lg-12'>
                      {error && <Alert variant="danger">{error}</Alert>}
                          <h2>Firebase and react Testing phase </h2>
                          <p>Hello the start of Authentication next We start new Chapter</p>
                          <Button type='submit' >Dashboard Demo</Button>
                      </div>
                  </div>
              </div>
        </header>  
        </div> */}
        </div>
        </div>
      </>   
  )
}
