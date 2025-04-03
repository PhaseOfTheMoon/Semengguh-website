import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  return (
    <div className="guide-profile-container">
      <div className="guide-avatar-container">
        <img src="/images/parkguide_example.png" alt="Park Guide Avatar" className="guide-avatar" />
      </div>
      
      <h2 className="guide-name">Timmy He</h2>
      
      <div className="guide-description-section">
        <h3>Description:</h3>
        <div className="guide-description" contentEditable="true">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
        </div>
        <div className="separator-line"></div>
      </div>
      
      <div className="guide-actions">
        <Link to="/" className="back-button">Back</Link>
      </div>
    </div>
  );
};

export default Profile;