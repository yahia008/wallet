import React from 'react'
import './btn.css'
import { Link } from 'react-router-dom'


const Button = () => {

  return (
    <div>

        <div>
      <button className='btn-class ' type='submit'>Login</button>
      </div>

     <div className='text'><p>dont have an account?</p>
      <p><Link to= '/signup'>Singup</Link></p></div>

    </div>
  )
}

export default Button
