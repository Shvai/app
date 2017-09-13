import React, {Component} from 'react';
import './SearchBar.css';
import './searchicon.png';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="searchBar"
        placeholder="Search for names.."
        value={this.props.filterText}
        onChange={this.handleFilterTextInputChange} />
    );
  }
}

export default SearchBar;