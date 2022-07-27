import React ,{useContext ,useState ,useEffect}from 'react'
import { auth } from '../firebase_auth'
import { GoogleAuthProvider ,signInWithPopup , RecaptchaVerifier , signInWithPhoneNumber} from 'firebase/auth'

const AuthContext = React.createContext()
export function useAuth() {
  return useContext (AuthContext)
}


export function AuthProvider ({children}){
    const [currentUser ,setCurrentUser] = useState()
    const [loading , setLoading] = useState(true)
    const [updateControl , setUpdateControl] = useState(false)

    const googleSignIn =() =>{
        const provider = new GoogleAuthProvider();
        setUpdateControl(true)
        signInWithPopup(auth ,provider)
       
    } 

    function phoneVerify(number){
        const recaptcha = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
        recaptcha.render();
        return signInWithPhoneNumber(auth ,number , recaptcha)
    }

    function signup (email ,password){
     return  auth.createUserWithEmailAndPassword(email , password)
    }

    function login (email ,password){
       return auth.signInWithEmailAndPassword(email, password)
    }

    function logout (){
       return auth.signOut()
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }
    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    function resetPassword(email){
        auth.sendPasswordResetEmail(email)
    }
    
   useEffect(() =>{
       const unsubscribe = auth.onAuthStateChanged(user => {
           setCurrentUser(user)
           setLoading(false)
       })
       return unsubscribe
   },[]) 
    
   
    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        googleSignIn,
        phoneVerify,
        updateControl
    }

    return(
        <AuthContext.Provider  value={value}>
         {!loading && children}
        </AuthContext.Provider>
    )
}