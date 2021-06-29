import React, { useState } from 'react';
import '../CSS/Forum.css';
import Navbar from './Navbar';

function Forum() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const toggleBurgerOpened = () => setIsBurgerOpened((wasBurgerOpened) => !wasBurgerOpened);

  const toggleButton = (classname, text) => <button type="button" className={classname} onClick={toggleBurgerOpened}>{text}</button>;

  return (
    <>
      <div className="nav-container">
        {isBurgerOpened ? (
          <>
            {toggleButton('burger-close', 'x')}
            <Navbar />
          </>
        ) : (
          toggleButton('burger-open', '≣')
        )}
        <h1>Questions and Answers</h1>
        <button className="btn-topic" type="submit">Create topic</button>
      </div>
    </>
  );
}

export default Forum;
