import React ,{useRef , useState} from 'react'
import { Form, Button ,Card ,Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link ,useNavigate } from 'react-router-dom'

export default function UpdateProfile() {
    const EmailRef = useRef() 
    const PasswordRef = useRef() 
    const ConfirmRef = useRef()
    const {currentUser,updateEmail , updatePassword } = useAuth()
    const [error ,setError] = useState('')
    const [loading ,setLoading] = useState(false)
    const navigate = useNavigate()


    function handleSubmit(e){
        e.preventDefault()
 
        if(PasswordRef.current.value !== ConfirmRef.current.value) {
            return setError('password does not match')
        }    

        const promises =[]
        setError('')
        setLoading(true)
        if (EmailRef.current.value !== currentUser.email){
            promises.push(updateEmail(EmailRef.current.value))
        }
        if (PasswordRef.current.value !== currentUser.email){
            promises.push(updatePassword(PasswordRef.current.value))
        }

        Promise.all(promises).then(() =>{
            navigate('/')
        }).catch(()=>{
            setError('Failed To Update')
        }).finally(()=>{
            setLoading(false)
        })
    }
  return (
      <>
      <Card>
          <Card.Body>
       <h2 className="text-center mb-4">Update Profile</h2>
       {error && <Alert variant ="danger">{error}</Alert>}
       <Form onSubmit={handleSubmit}>
           <Form.Group id ="email">
               <Form.Label>Email</Form.Label>
               <Form.Control type='email' ref={EmailRef}  required
               defaultValue={currentUser.email}/>
           </Form.Group>
           <Form.Group id ="password">
               <Form.Label>PassWord</Form.Label>
               <Form.Control type='password' ref={PasswordRef}  
               placeholder='Leave blank To keep same password'/>
           </Form.Group>
           <Form.Group id ="password-confirm">
               <Form.Label>Confirm password</Form.Label>
               <Form.Control type='password' ref={ConfirmRef}  
               placeholder='Leave blank To keep same password'/>
           </Form.Group>
           <Button disabled={loading} className='w-100' style={{marginTop : "30px"}} type='submit'> Update</Button>
       </Form>
          </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
              <Link to="/">Cancel</Link>
          </div>
          
      </>
  )
}
