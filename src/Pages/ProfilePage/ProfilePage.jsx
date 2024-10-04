import React, { useState, useEffect } from 'react';
import ProfileDetails from '../../components/ProfilePage/ProfileDetails';
import Trophies from '../../components/ProfilePage/Trophies';
import Stats from '../../components/ProfilePage/Stats';
import UUID from '../../components/ProfilePage/UUID';
import PhotoUpload from '../../components/ProfilePage/PhotoUpload';
import profileData from '../../data/profileData.json';
import './ProfilePage.css';

const ProfilePage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(profileData);
  }, []);

  return (
    <div className="profile-page">
      <div className="header">
        <h1>User Profile</h1>
      </div>
      <PhotoUpload />
      <ProfileDetails profileData={data} />
      <Trophies trophies={data.trophies} />
      <Stats gamesPlayed={data.no_of_ludo_games} wins={data.no_of_wins} />
      <UUID uuid={data.uuid} />
    </div>
  );
};

export default ProfilePage;
