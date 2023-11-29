import React from 'react'
import Transaction from './trans'
import Header from './header'
import './ball.css'

const Bal= () => {
  return (
    <div className='account'>
      <Header/>
      <Transaction/>
    </div>
  )
}

export default Bal
