import React from 'react'
import { FaDollarSign } from "react-icons/fa";

import { icons } from './icon';

const Sidebar = () => {
  return (
    <div className='side'>

      <div className='header'>
        <h3>Dashi</h3>
     </div>

     <div>
        <div>
            {icons.map(Icon => {
            return(
            <div className='icons'><Icon.name color='yellowgreen' /></div>
        )})} 
        </div>
     </div>
    </div>
  )
}

export default Sidebar
