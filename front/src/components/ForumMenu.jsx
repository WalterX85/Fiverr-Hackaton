import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css';

function ForumMenu() {
  return (
    <nav className="navMenu">
      <ul>
        <li className="displayMenu">
          <NavLink to="/graphicsdesign"> Graphic & Design</NavLink>
          <ul className="sub">
            <li><a href="sub-category">Logo Design</a></li>
            <li><a href="sub-category">Game Art</a></li>
            <li><a href="sub-category">Graphic for Streamers</a></li>
          </ul>
        </li>
        <li className="displayMenu">
          <NavLink to="/digitalmarketing">Digital Marketing</NavLink>
          <ul className="sub">
            <li><a href="sub-category">Social Media Marketing</a></li>
            <li><a href="sub-category">Public Relations</a></li>
            <li><a href="sub-category">Podcast Marketing</a></li>
          </ul>
        </li>
        <li className="displayMenu">
          <NavLink to="/writtingtranslation">Writting & Translation</NavLink>
          <ul className="sub">
            <li><a href="sub-category">Translation</a></li>
            <li><a href="sub-category">Script Writting</a></li>
            <li><a href="sub-category">UX Writting</a></li>
          </ul>
        </li>
        <li className="displayMenu">
          <NavLink to="/programmingtech">Programming & tech</NavLink>
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

export default ForumMenu;
