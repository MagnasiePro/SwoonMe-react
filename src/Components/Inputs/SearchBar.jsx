import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <FiSearch class="search-bar-icon" />
      <input className="search-bar-input" placeholder="Mon futur jouet sera ..." />
    </div>
  );
};

export default SearchBar;
