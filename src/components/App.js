import SignUp from "./SignUp";
import {Container} from "react-bootstrap"
import {AuthProvider } from "../context/AuthContext"
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Login from "./Login"
import PrivateScreen from "./PrivateScreen";
import ForgetPassword from "./ForgetPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (

  <Container
  className="d-flex align-items-center justify-content-center"
  style={{minHeight : "100vh"}}
  >
    <div className="w-100" style={{maxWidth:"450px"}}>
      <Router>
      <AuthProvider>
        <Routes>
        <Route exact path='/' element={<PrivateScreen><Dashboard /></PrivateScreen>}/>
          <Route  path='/updateprofile' element={<PrivateScreen><UpdateProfile /></PrivateScreen>}/>
          <Route  path="/signup" element={<SignUp/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/forgetpassword" element={<ForgetPassword/>} />
        </Routes>
      </AuthProvider>
      </Router>
    </div>
  </Container>
 
  )
  
}

export default App;
