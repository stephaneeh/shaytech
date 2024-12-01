import React from 'react';
import logo from '../assets/logos/bgBlack_blue.png'
// import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="My Logo" />
      <h1>ShayTech</h1>
      {/* <SearchBar /> */}
    </header>
  );
}

export default Header;