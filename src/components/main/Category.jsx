import React from 'react';
import '../../styles/Category.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Category = () => {
  return (
    <div className="category-container">
      <div className="title">
        <p>Files</p>
      </div>
      <div className='sorting-panel'>
        <div className='sorting-icons'>
          <ArrowUpwardIcon/>
        </div>
        <div className='sorting-panel-list'>
          <p>Name</p>
          <ArrowDropDownIcon/>
        </div>
        <div className='sorting-icons'>
          <MoreVertIcon/>
        </div>
      </div>
    </div>
  );
};

export default Category;