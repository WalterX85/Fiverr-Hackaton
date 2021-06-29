import React from 'react';
import '../CSS/Profile.css';
import imgProfile from '../Assets/imgprofile.jpg';

function Profile() {
  return (
    <div className="profile-container">
      <div className="intro-container">
        <h1 className="title">Fiverr&apos;s Flow</h1>
        <h2 className="title-two">Improve communities</h2>
        <ul className="title-list">
          <li className="list">Collaboration</li>
          <li className="list">Mutual Aid</li>
          <li className="list">Learning</li>
        </ul>
      </div>
      <div className="status-container">
        <h3 className="profile-text">
          Wanna
          {' '}
          <span>collaborate</span>
          {' '}
          ?
        </h3>
        <p className="description-text">
          You can update your profile with a status that indicate
          to your pairs if you&apos;re available to collaborate now or later !
          {' '}
        </p>
        <form>
          <select className="status-form" value="select-collaboration">
            <option value="collaborate">I can collaborate now!</option>
            <option value="not-collaborate">I will collaborate later!</option>
          </select>
          <input className="btn-collab" type="submit" value="send" />
        </form>
      </div>
      <div className="forumLink">
        <div className="imgContainer">
          <img className="text-avatar" src={imgProfile} alt="" />
        </div>
        <div className="forumContainer">
          <h4 className="title-forum">
            Visit our&nbsp;
            <span>forum</span>
            !
          </h4>
          <p className="forum-text">Join community of freelancers from around the world and from any domains</p>
          <button className="btn-forum" type="button">Forum</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
