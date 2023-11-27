import React from 'react'
import './sign.css'
import Input from './input'
import Btn from './buttn'

const SignUp = () => {
  return (
    <div className='contain'>
      <div className='box-box'>
        
        <div className='header'>
        <div><h2>Dashi</h2></div>

        <div><button>Login</button></div>
        </div>

        <Input/>

        
      </div>
    </div>
  )
}

export default SignUp
