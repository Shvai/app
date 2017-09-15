import React from 'react';
import './TopNav.css';

class TopNav extends Component {
  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a style={{float:'right'}} href="#login">Login</a>
      </div>
    );
  }
}

export default TopNav;