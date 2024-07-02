import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../../styles/SidebarItem.css'

const SidebarItem = ({ arrow, icon, label}) => {
  return (
    <div className='sidebarItem'>
      <div className='sidebarItem-arrow'>
        {arrow && (<ArrowRightIcon />)}
      </div>

      <div className='sidebarItem-main'>
        {icon}
        <p>{label}</p>
      </div>
      
    </div>
  )
}

export default SidebarItem