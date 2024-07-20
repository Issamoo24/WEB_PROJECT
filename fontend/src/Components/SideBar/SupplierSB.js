import React from 'react'
import './TutorSB.css'
import { TutorSBData } from './TutorSBData'

function TutorSB() {
  return (
    <div className='TutorSB'>
        <ul className='TutorSBList'>
        {TutorSBData.map((val, key) => {
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
  )
}

export default TutorSB
