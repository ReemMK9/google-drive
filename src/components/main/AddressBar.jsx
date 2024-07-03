import React from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import '../../styles/AddressBar.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const AddressBar = () => {
  return (
    <div className='address-bar'>
      <div className='address-container'>
        <div className='address-container-button'>
          <p>My Drive</p>
          <ArrowDropDownOutlinedIcon/>
        </div>
      </div>
      <div className='viewing-icons'>
         <div className='viewing-icons-layout'>
          <MenuOutlinedIcon/>
          <div className='vertical'></div>
          <CheckOutlinedIcon/>
          <GridViewOutlinedIcon/>
        </div> 
        <div className='viewing-icons-info'>
          <InfoOutlinedIcon/>
        </div>
      </div>
    </div>
  );
};

export default AddressBar;