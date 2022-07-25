import { Navigate} from "react-router";
import { useAuth } from "../context/AuthContext";
 
const PrivateScreen = ({ children }) => {
  const {currentUser }= useAuth();
  if (!currentUser) {
   return <Navigate to="/login"  />;
  }
  return children;
};

export default PrivateScreen;