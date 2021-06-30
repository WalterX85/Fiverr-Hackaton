import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Forum.css';
import Navbar from '../components/ForumMenu';
import QuestionList from '../components/QuestionList';
import Header from './Header';

function Forum() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const toggleBurgerOpened = () => setIsBurgerOpened((wasBurgerOpened) => !wasBurgerOpened);

  const toggleButton = (classname, text) => <button type="button" className={classname} onClick={toggleBurgerOpened}>{text}</button>;
  return (
    <>
      <Header />
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
        <Link to="/questions/create">Create topic</Link>
        <QuestionList />
      </div>
    </>
  );
}

export default Forum;
