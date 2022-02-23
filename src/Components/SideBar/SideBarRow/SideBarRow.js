import React from 'react'
import './SideBarRow.css'

function SideBarRow  ({selected ,Icon ,title}) {
    
      
    return (
        <div className={`sideBarRow ${selected && 'selected'}`}>
            <Icon className={'sideBarRow_icon'}/>
            <h1 className='sideBarRow_title'>{title}</h1>
        </div>
    )
}

export default SideBarRow
