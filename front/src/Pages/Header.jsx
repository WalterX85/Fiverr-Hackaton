import React from 'react';
import '../css/Header.scss';
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
          <a href="Fiverr-Business">Fiverr Business</a>
        </div>
        <div className="explore">
          <a href="Explore">Explore</a>
        </div>
        <div className="language">
          <a href="🌐 English">🌐 English</a>
        </div>
        <div className="type-of-monney">
          <a href="€EUR">€EUR</a>
        </div>
        <div className="become-a-seller">
          <a href="Become-a-seller">Become a seller</a>
        </div>
        <div className="sign-in">
          <a href="Sign-Up">Sign Up</a>
        </div>
        <div className="join">
          <a href="Sign-In<">Sign In</a>
        </div>
      </div>
      <div className="container2">
        <div className="graphics-design">
          <a href="Graphics-Design">Graphics & Design</a>
        </div>
        <div className="digital-marketing">
          <a href="Digital Marketing">Digital Marketing</a>
        </div>
        <div className="writing-translation">
          <a href="Writing-Translation">Writing & Translation</a>
        </div>
        <div className="video-animation">
          <a href="Video-Animation">Video & Animation</a>
        </div>
        <div className="music-audio">
          <a href="Music-Audio">Music & Audio</a>
        </div>
        <div className="programming-tech">
          <a href="Programming-Tech">Programming & Tech</a>
        </div>
        <div className="data">
          <a href="Data">Data</a>
        </div>
        <div className="business">
          <a href="Business">Business</a>
        </div>
        <div className="lifestyle">
          <a href="Lifestyle">Lifestyle</a>
        </div>
        <div className="question-answer">
          <a href="Forum">Forum</a>
        </div>
      </div>
    </>
  );
}

export default Header;
