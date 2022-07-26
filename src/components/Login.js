
import React ,{useRef , useState ,useEffect} from 'react'
import { Form, Button ,Card ,Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link , useNavigate} from 'react-router-dom'
import {GoogleButton} from 'react-google-button'
import logo from '../assets/logo.png'

export default function Login() {
    const EmailRef = useRef() 
    const PasswordRef = useRef() 
    const { login , googleSignIn ,currentUser} = useAuth()
    const [error ,setError] = useState('')
    const [loading ,setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleGoogleSignIn(){
        try{
            setError('')
            setLoading(true)
            await googleSignIn();
            navigate('/')
        }catch(error){
            setError('Failed to Sign In')
        }
        setLoading(false)
    }


    async function handleSubmit(e){
        e.preventDefault() 
        try{
            setError('')
            setLoading(true)
            await login(EmailRef.current.value , PasswordRef.current.value)
            navigate('/')
        }catch{
            setError('Failed to Sign In')
        }
        setLoading(false)
    }

    useEffect(() =>{
        if(currentUser != null){
            navigate('/')
        }
    })


  return (
      <>
      <Card>
          <Card.Body>
              <img src={logo} className="w-100" alt="Logo" style={{width:"40px" , height:"150px" , justifyContent:"center" }}/>
       <h2 className="text-center mb-4">Log In</h2>
       {error && <Alert variant ="danger">{error}</Alert>}
       <Form onSubmit={handleSubmit}>
           <Form.Group id ="email">
               <Form.Label>Email</Form.Label>
               <Form.Control type='email' ref={EmailRef}  required/>
           </Form.Group>
           <Form.Group id ="password">
               <Form.Label>PassWord</Form.Label>
               <Form.Control type='password' ref={PasswordRef}  required/>
           </Form.Group>
           <Button disabled={loading} className='w-100' style={{marginTop : "30px"}} type='submit'> Login</Button>
       </Form>
       <div className='w-100 text-center mt-2'>
       <Link to="/forgetpassword">Forget Password</Link>
       </div>
          </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
              Do not have an account ? <Link to="/signup">Sign Up</Link>
          </div>
          <div className='w-100 text-center mt-2 justfy-content-center' >
          <GoogleButton onClick={handleGoogleSignIn} className='w-100' />
          </div>
          <Link to="/phoneauth">
          <div>
          <Button disabled={loading} className='w-100' style={{marginTop : "30px"}} type='submit'> Sign In with Phone</Button>
          </div>
          </Link>
          
      </>
  )
}
