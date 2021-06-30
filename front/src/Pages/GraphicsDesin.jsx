import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.scss';
import logoWhite from '../Assets/logoWhite.png';

function GraphicsDesign() {
  return (
    <>
      <div className="headerContainer">
        <div className="navContainer">
          <img className="logo" src={logoWhite} alt="logo" />
          <Link className="forumNav" to="/forum">Forum</Link>
          <Link className="forumNav" to="/">Profile</Link>
        </div>
        <h1 className="mainTitle">Graphic and Design</h1>
      </div>
      <h3 className="question">
        Question :
      </h3>
      <div className="box">
        <h2>What is the single most influential book every designer programmer should read ?</h2>
      </div>
      <h4 className="question">
        Answer :
      </h4>
      <div className="box1">
        <ul>
          <li>Code Complete (2nd edition) by Steve McConnell</li>
          <li>The Pragmatic Programmer</li>
          <li>Structure and Interpretation of Computer Programs</li>
          <li>The C Programming Language by Kernighan and Ritchie</li>
          <li>Introduction to Algorithms by Cormen, Leiserson, Rivest and Stein</li>
          <li>Design Patterns by the Gang of Four</li>
        </ul>
      </div>
    </>
  );
}

export default GraphicsDesign;
