import React from 'react'
import './login.css'
import { RxAvatar } from "react-icons/rx";
import Button from './button';


const Login = () => {


  return (
    <>
     
    <div className= 'main'>
    
        <div className='container'>

            <div className='avatar'>
        <RxAvatar color='purple' fontSize='3.5rem' />
       </div>

       <div className='head'>
        <h2>Have an account?</h2>    
        </div>

        <div className='input'>
            <div>
        <input type='text' placeholder='username' />

            </div>
            
        </div>

        <div className='input'>
            <div>
        <input type='password' placeholder='password'/>

            </div>
            
        </div>

        <div className='btn'>
         <Button/>
        </div>

        </div>


      
    </div>
    
    </>
  )
}

export default Login
