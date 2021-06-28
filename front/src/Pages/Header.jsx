import React from 'react';
import '../CSS/Header.scss';
import logoFiverr from '../Assets/logoFiverr.jpg';

function Header() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img className="logo" src={logoFiverr} alt="logo" />
        </div>
        <div className="searchbar">
          <input type="search" autoComplete="off" placeholder="Find Services" value="" />
          <button type="button" className="searchButton">Search</button>
        </div>
        <div className="fiverr-business">
          <a href="test">Fiverr Business</a>
        </div>
        <div className="explore">
          <a href="test">Explore</a>
        </div>
        <div className="language">
          <a href="test">🌐 English</a>
        </div>
        <div className="type-of-monney">
          <a href="test">€EUR</a>
        </div>
        <div className="become-a-seller">
          <a href="test">Become a seller</a>
        </div>
        <div className="sign-in">
          <a href="test">Sign Up</a>
        </div>
        <div className="join">
          <a href="test">Sign In</a>
        </div>
      </div>

    </>
  );
}

export default Header;
