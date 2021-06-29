import React from 'react';
import '../CSS/Navbar.css';

function Navbar() {
  return (
    <nav className="navMenu">
      <ul>
        <li className="displayMenu">
          <a href="category">Graphic & Design</a>
          <ul className="sub">
            <li><a href="sub-category">Logo Design</a></li>
            <li><a href="sub-category">Game Art</a></li>
            <li><a href="sub-category">Graphic for Streamers</a></li>
          </ul>
        </li>
        <li className="displayMenu">
          <a href="category">Digital Marketing</a>
          <ul className="sub">
            <li><a href="sub-category">Social Media Marketing</a></li>
            <li><a href="sub-category">Public Relations</a></li>
            <li><a href="sub-category">Podcast Marketing</a></li>
          </ul>
        </li>
        <li className="displayMenu">
          <a href="category">Writting & Translation</a>
          <ul className="sub">
            <li><a href="sub-category">Translation</a></li>
            <li><a href="sub-category">Script Writting</a></li>
            <li><a href="sub-category">UX Writting</a></li>
          </ul>
        </li>
        <li className="displayMenu">
          <a href="category">Programming & tech</a>
          <ul className="sub">
            <li><a href="sub-category">WordPress</a></li>
            <li><a href="sub-category">Game Development</a></li>
            <li><a href="sub-category">Web Programming</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
