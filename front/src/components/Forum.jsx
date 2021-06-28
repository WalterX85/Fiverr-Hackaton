import React, { useState } from 'react';
import '../CSS/Forum.css';

function Forum() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  return (
    <div>
      {!isBurgerOpened && (
        <button type="button" label="menu-burger" onClick={() => setIsBurgerOpened(!isBurgerOpened)}>Je suis un menu burger</button>
      )}
      {isBurgerOpened && (
      <nav>
        <ul>
          <li>C&apos;est</li>
          <li>la</li>
          <li>navbar</li>
        </ul>
      </nav>
      )}
      {isBurgerOpened && (
      <button type="button" label="button-inside-burger-menu" onClick={() => setIsBurgerOpened(!isBurgerOpened)}>Je suis le bouton dans le menu burger</button>
      )}
      <h1>Questions and Answers</h1>
      <button type="submit">Create topic</button>
    </div>
  );
}

export default Forum;
