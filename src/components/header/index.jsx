import React from 'react'
import '../../styles/Header.css'

import GDLogo from '../../media/Google_Drive-Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

const index = ({userPhoto}) =>{
   return(
     <div className='header'>
        <div className='header_logo'>
          <img src={GDLogo}></img>
          <span>Drive</span>
        </div>
       <div className='header_searchContainer'>
         <div className='header_searchBar'>
           <SearchIcon/>
           <input type='text' placeholder='Search Drive'/>
           <TuneIcon/>
        </div>
       </div>
       <div className='header_icons'>
       <span>
        <HelpOutlineIcon/>
        <SettingsIcon/>
       </span>
         
       <AppsIcon/>
       <img src= {userPhoto} alt='User Photo'/>
       </div>
     </div>
   ) 
}

export default index;