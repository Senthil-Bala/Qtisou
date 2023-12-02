import React from 'react'
import logo from "./logo.png";
import "./Logo.css"
function Logo() {
  return (
    <div>
        <img src={logo} alt="Qtify" className='qtify' />
    </div>
  )
}

export default Logo