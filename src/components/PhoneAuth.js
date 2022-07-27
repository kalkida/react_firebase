import React ,{useState} from 'react'
import { Form, Button ,Card ,Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import "react-phone-number-input/style.css"
import { Link , useNavigate} from 'react-router-dom'
import PhoneInputWithCountrySelect from 'react-phone-number-input'
import {Container} from "react-bootstrap"


export default function PhoneAuth() {
    const [number , setNumber] = useState('')
    const [error ,setError] = useState('')
    const [code , setCode] = useState('')
    const [flag , setFlag] = useState(false)
    const [confirmObj , setConfirmObj] = useState('')
    const [loading ,setLoading] = useState(false)
    const {phoneVerify} = useAuth()
    const navigate = useNavigate()

   async function getVerify(e){
        e.preventDefault()
        if(number === '' || number === undefined) {
        return setError('Please enter valid phone number')
        }
        try{
            setError('')
            setLoading(true)
            const response= await phoneVerify(number);
            setConfirmObj(response)
            setFlag(true)
        }catch(error){
            setError(error.message)
        }
        setLoading(false)
    }
   async function VerifyOtp(e){
        e.preventDefault()
        if(code === "" || code === null) return;
        try{
            setError('')
            setLoading(true)
            await confirmObj.confirm(code)
            navigate('/')
            

        }catch(error){
            setError(error.message)
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
       <h2 className="text-center mb-4">Phone Authentication</h2>
       {error && <Alert variant ="danger">{error}</Alert>}
       <Form onSubmit={getVerify}   style={{display: !flag ? "block" : "none"}}>
           <Form.Group className='mb-3' controlId='formBasicPhoneNumber'>
             <PhoneInputWithCountrySelect
             defaultCountry='ET'
             value={number}
             onChange={setNumber}
             placeholder="Enter Phone number"
             />
             <div id="recaptcha-container"/>
           </Form.Group>
           <Button disabled={loading} className='w-100' style={{marginTop : "30px"}} type='submit'> Send Verification</Button>
           <div className='w-100 text-center mt-2'>
       <Link to="/login">cancel</Link>
       </div>
       </Form>
     

       <Form onSubmit={VerifyOtp} style={{display: flag ? "block" : "none"}}>
           <Form.Group className='mb-3' controlId='formBasicotp'>
            <Form.Control  type='text' placeholder='enter verfication code' onChange={(e) => setCode(e.target.value)}/>
                
           </Form.Group>
           <Button disabled={loading} className='w-100' style={{marginTop : "30px"}} type='submit'> Verify Phone</Button>
           <div className='w-100 text-center mt-2'>
           <Link to="/login">cancel</Link>
       </div>
       </Form>
          </Card.Body>
          </Card>
          </div>
          </Container>
      </>
  )
}
