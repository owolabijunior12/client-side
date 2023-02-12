import React from 'react'
import '../style/sidebarOption.css'

function SideBarOption({title , Icon}) {
  return (
    <div className='sidebaroption'>
        {Icon && <Icon className="sidebarOption_icon"></Icon>}
        {Icon ?<h4>{title}</h4>: <p  className="sidebarOption_icon">{title}</p>}
    </div>
  )
}

export default SideBarOption
