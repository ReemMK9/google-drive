import React from 'react';
import '../../styles/FilterBar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FilterBar = () => {
  return (
    <div className='filter-bar'>
      <div className='filter-buttons'>
        
        <div className='filter-list'>
          <p>Type</p>
          <ArrowDropDownIcon/>
        </div>
        
        <div className='filter-list'>
          <p>People</p>
          <ArrowDropDownIcon/>
        </div>
        
        <div className='filter-list'>
          <p>Modified</p>
          <ArrowDropDownIcon/>
        </div>
        
      </div>
    </div>
  );
};

export default FilterBar;