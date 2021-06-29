import React from 'react';
import '../CSS/Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="intro-container">
        <h1 className="title">Welcome to your profile !</h1>
        <ul className="profile-text">
          <li>Collaboration</li>
          <li>Mutual Aid</li>
          <li>Learning</li>
        </ul>
      </div>
      <div className="status-container">
        <h2 className="profile-text">
          Tell us if you are interested for working with someone else !
          (You can change it later if you are not available now ;) )
        </h2>
        <form>
          <select className="status-form" value="select-collaboration">
            <option value="collaborate">I&apos;m open for collaboration</option>
            <option value="not-collaborate">I don&apos;t want collaborate</option>
            <option value="collaborate-conditions">I can collaborate with conditions</option>
          </select>
          <input className="btn-collab" type="submit" value="send" />
        </form>
      </div>
    </div>
  );
}

export default Profile;
