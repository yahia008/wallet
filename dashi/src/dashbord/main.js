import React from 'react'
import Sidebar from './sidebar'
import Transaction from './trans'
import Bal from './bal'

import './dassh.css'


const Dasbord = () => {

  return (
    <div className='maini'>
        <Sidebar/>
        <Bal/>
        
      
    </div>
  )
}

export default Dasbord
