
import React ,{useRef , useState} from 'react'
import { Form, Button ,Card ,Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import {Container} from "react-bootstrap"

export default function ForgetPassword() {
    const EmailRef = useRef() 
    const { resetPassword } = useAuth()
    const [error ,setError] = useState('')
    const [message ,setMessage] = useState('')
    const [loading ,setLoading] = useState(false)
    


    async function handleSubmit(e){ 
        e.preventDefault() 
        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(EmailRef.current.value)
            setMessage('Password has been reset, Check Your Inbox for further instruction')
        }catch{
            setError('Failed to Reset Password')
        }
        setLoading(false)
    }
  return (
      <> 
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{minHeight : "100vh"}}
      >
      <div className="w-100" style={{maxWidth:"450px"}}>
      <Card>
          <Card.Body>
       <h2 className="text-center mb-4">Password Reset</h2>
       {error && <Alert variant ="danger">{error}</Alert>}
       {message && <Alert variant ="success">{message}</Alert>}
       <Form onSubmit={handleSubmit}>
           <Form.Group id ="email">
               <Form.Label>Email</Form.Label>
               <Form.Control type='email' ref={EmailRef}  required/>
           </Form.Group>
           <Button disabled={loading} className='w-100' style={{marginTop : "30px"}} type='submit'> Reset</Button>
       </Form>
       <div className='w-100 text-center mt-2'>
       <Link to="/login">Login</Link>
       </div>
          </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
              Do not have an account ? <Link to="/signup">Sign Up</Link>
          </div>
          </div>
      </Container>  
          
      </>
  )
}
