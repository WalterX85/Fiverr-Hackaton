import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.scss';
import logoWhite from '../Assets/logoWhite.png';
import dislike from '../Assets/dislike.svg';
import like from '../Assets/like.svg';
import disliked from '../Assets/disliked.svg';
import liked from '../Assets/liked.svg';
import fav from '../Assets/fav.svg';
import love from '../Assets/love.svg';

function GraphicsDesign() {
  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLiked2, setIsLiked2] = useState(false);
  const [dislikesCount, setDislikesCount] = useState(0);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isDisliked2, setIsDisliked2] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const [likesCount2, setLikesCount2] = useState(0);
  const [dislikesCount2, setDislikesCount2] = useState(0);
  const [isFav2, setIsFav2] = useState(false);

  function alreadyLiked() {
    setLikesCount(0);
    setIsLiked(false);
  }

  function alreadyDisliked() {
    setDislikesCount(0);
    setIsDisliked(false);
  }

  function alreadyLiked2() {
    setLikesCount2(0);
    setIsLiked2(false);
  }

  function alreadyDisliked2() {
    setDislikesCount2(0);
    setIsDisliked2(false);
  }

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
      <div className="box">
        <h2>
          Hello, anyone knows what are the most influentials books
          every designer programmer should read ?
        </h2>
      </div>
      <div>
        <p className="questionUser">Posted by asker1 (06/28/21 at 9h00 pm)</p>
      </div>
      <div className="box1">
        <div className="answerList">
          <section className="timeDiv">
            <p className="answerUser">Posted by user1 (06/29/21 at 09:31 am) :</p>
          </section>
          <ul>
            <p>Here are a few books that i have personaly read and that might be helpful to you</p>
            <li>-Design Patterns by the Gang of Four</li>
            <li>-Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, eius?</li>
            <li>-Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, veritatis?</li>
            <li>-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, non.</li>
            <li>-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quos.</li>
            <li>-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, architecto.</li>
          </ul>
        </div>
        <div className="likeButtons">
          <button type="button" className="iconBtn" onClick={() => { setLikesCount(likesCount + 1); setIsLiked(!isLiked); }}>
            {!isLiked
              ? <img src={like} alt="" />
              : <img src={liked} alt="" />}
            {likesCount <= 1
              ? likesCount
              : alreadyLiked()}
          </button>
          <button type="button" className="iconBtn" onClick={() => { setDislikesCount(dislikesCount + 1); setIsDisliked(!isDisliked); }}>
            {!isDisliked
              ? <img src={dislike} alt="" />
              : <img src={disliked} alt="" />}
            {dislikesCount <= 1
              ? dislikesCount
              : alreadyDisliked()}
          </button>
          <button type="button" className="iconFav" onClick={() => setIsFav(!isFav)}>
            {!isFav
              ? <img src={love} alt="" />
              : <img src={fav} alt="" />}
          </button>
        </div>
        <div className="box1">
          <div className="answerList">
            <section className="timeDiv">
              <p className="answerUser">Posted by user2 (06/30/21 at 08:55 am) :</p>
            </section>
            <ul>
              <p>Hello,</p>
              <p>
                I can suggest you to read this book :&nbsp;
                <a className="flowLinks" href="https://www.amazon.com/Learning-Web-Design-Beginners-JavaScript/dp/1491960205/">Learning Web Design</a>
              </p>
              <p>Have fun!</p>
            </ul>
          </div>
          <div className="likeButtons">
            <button type="button" className="iconBtn" onClick={() => { setLikesCount2(likesCount2 + 1); setIsLiked2(!isLiked2); }}>
              {!isLiked2
                ? <img src={like} alt="" />
                : <img src={liked} alt="" />}
              {likesCount2 <= 1
                ? likesCount2
                : alreadyLiked2()}
            </button>
            <button type="button" className="iconBtn" onClick={() => { setDislikesCount2(dislikesCount2 + 1); setIsDisliked2(!isDisliked2); }}>
              {!isDisliked2
                ? <img src={dislike} alt="" />
                : <img src={disliked} alt="" />}
              {dislikesCount2 <= 1
                ? dislikesCount2
                : alreadyDisliked2()}
            </button>
            <button type="button" className="iconFav" onClick={() => setIsFav2(!isFav2)}>
              {!isFav2
                ? <img src={love} alt="" />
                : <img src={fav} alt="" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraphicsDesign;
