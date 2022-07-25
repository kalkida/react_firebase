
import React ,{useRef , useState} from 'react'
import { Form, Button ,Card ,Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const EmailRef = useRef() 
    const PasswordRef = useRef() 
    const ConfirmRef = useRef()
    const { signup } = useAuth()
    const [error ,setError] = useState('')
    const [loading ,setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
 
        if(PasswordRef.current.value !== ConfirmRef.current.value) {
            return setError('password does not match')
        }    
        try{
            setError('')
            setLoading(true)
            await signup(EmailRef.current.value , PasswordRef.current.value)
        }catch{
            setError('Failed to create account')
        }
        setLoading(false)
    }
  return (
      <>
      <Card>
          <Card.Body>
       <h2 className="text-center mb-4">Sign Up</h2>
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
           <Form.Group id ="password-confirm">
               <Form.Label>Confirm password</Form.Label>
               <Form.Control type='password' ref={ConfirmRef}  required/>
           </Form.Group>
           <Button disabled={loading} className='w-100' style={{marginTop : "30px"}} type='submit'> SignUp</Button>
       </Form>
          </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
              Already have an account ? <Link to="/login">Log In</Link>
          </div>
          
      </>
  )
}
