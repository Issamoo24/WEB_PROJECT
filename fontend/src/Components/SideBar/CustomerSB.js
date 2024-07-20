import React from 'react'
import './Sidebar.css'
import { SidebarData } from './SidebarData' // array variable 

function Sidebar() {
  return (
  <div className='sideBarApp'>
    <ul className='SideBarList'>
        {SidebarData.map((val, key) => {
            return (
                <li key={key}
                  className='row' 
                  id={window.location.pathname === val.link ? 'active' : ''}
                  onClick={()=> {window.location.pathname = val.link
                  }}
                >
                    <div id='icon'>{val.icon}</div> <div id='title'>{val.title}</div>
                </li>
            )
        })}
    </ul>
    </div>
  );
}

export default Sidebar
