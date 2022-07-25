
import React ,{useRef , useState} from 'react'
import { Form, Button ,Card ,Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link , useNavigate} from 'react-router-dom'

export default function Login() {
    const EmailRef = useRef() 
    const PasswordRef = useRef() 
    const { login } = useAuth()
    const [error ,setError] = useState('')
    const [loading ,setLoading] = useState(false)
    const navigate = useNavigate()


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
  return (
      <>
      <Card>
          <Card.Body>
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
          </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
              Do not have an account ? <Link to="/signup">Sign Up</Link>
          </div>
          <div >
          <Button className='w-100 mt-2' style={{marginTop : "60px",color:"white" ,}} type='submit'> Continue With Google</Button>
          </div>
          
      </>
  )
}
