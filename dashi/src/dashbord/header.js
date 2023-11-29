import React from 'react'
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <div className='head-box'>
      <div><h2 className='dash-head'>Dasboard</h2></div>
      <div className='avatar'>
        <RxAvatar color='white' size='2rem'/> 
        <h3>John Greg</h3>
        </div>
    </div>
  )
}

export default Header
