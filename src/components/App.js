import SignUp from "./SignUp";
import {AuthProvider } from "../context/AuthContext"
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Login from "./Login"
import PrivateScreen from "./PrivateScreen";
import ForgetPassword from "./ForgetPassword";
import UpdateProfile from "./UpdateProfile";
import PhoneAuth from "./PhoneAuth";


function App() {
  return (
 
   
      <Router>
      <AuthProvider>
        <Routes>
        <Route exact path='/' element={<PrivateScreen><Dashboard /></PrivateScreen>}/>
          <Route  path='/updateprofile' element={<PrivateScreen><UpdateProfile /></PrivateScreen>}/>
          <Route  path="/signup" element={<SignUp/>} />
          <Route  path="/phoneauth" element={<PhoneAuth/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/forgetpassword" element={<ForgetPassword/>} />
        </Routes>
      </AuthProvider>
      </Router>


 
  )
  
}

export default App;
