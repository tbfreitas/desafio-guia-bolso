import React from 'react';
import Logo from '../assets/logo.png';

function Header() {
  return (
    <div className="Header-page">
      <img className="Logo" src={Logo} width="320" height="70" alt="logo" />
      <div className="Line-divider" />
    </div>
  );
}

export default Header;
