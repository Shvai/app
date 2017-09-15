import React from 'react';
import './SearchBar.css';
import './searchicon.png';

export const SearchBar = (props) =>{
    return (
      <input
        type="text"
        className="searchBar"
        placeholder="Search for names.."
        value={props.filterText}
        onChange={props.onChange} />
    )
};