import React from 'react';
import '../../styles/Main.css';
import AddressBar from './AddressBar.jsx';
import FilterBar from './FilterBar.jsx';
import Category from './Category.jsx';

const Main = () => {
  return (
    <div>
      <AddressBar/>
      <FilterBar/>
      <Category/>
      {/* Files */}
    </div>
  );
};

export default Main;