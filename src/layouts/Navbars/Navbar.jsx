import React from 'react'
import Icon from "../QtifyLogo//Logo"
import Search from '../Searchs/Search';
import Feedback from '../Feedback/Feedback'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='nav'>
        <div className="left">
            <Icon/>
        </div>
        <div className="middle">
            <Search/>
        </div>
        <div className="right">
            <Feedback/>
        </div>
    </div>
  )
}

export default Navbar