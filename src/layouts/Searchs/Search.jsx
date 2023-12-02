import React from 'react'
import "./Search.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Search() {
  return (
    
       <div className='inputBars'>
        <input  className='searchbar' type="text" placeholder='Search a album of your choice'/>
        <button className="searchBtn"><SearchOutlinedIcon/></button>
    </div>
    
  )
}

export default Search