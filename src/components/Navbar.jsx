import React, { useState } from 'react';
import useDarkMode from "./hooks/useDarkMode";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(true);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <Link to="/tickers" className="tickers-link">Tickers</Link>
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
