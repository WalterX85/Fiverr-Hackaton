import React from 'react';
import '../CSS/Home.scss';

function GraphicsDesin() {
  return (
    <>
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

export default GraphicsDesin;
