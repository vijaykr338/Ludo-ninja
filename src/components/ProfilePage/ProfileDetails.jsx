import React from 'react';

const ProfileDetails = ({ profileData }) => {
  return (
    <div className="profile-details">
      <div className="detail-item">
        <label>NAME</label>
        <span>{profileData.username}</span>
        <button className="edit-button">✎</button>
      </div>
      <div className="detail-item">
        <label>EMAIL</label>
        <span>{profileData.email}</span>
        <button className="edit-button">✎</button>
      </div>
    </div>
  );
};

export default ProfileDetails;
