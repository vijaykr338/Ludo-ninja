import React from 'react';
import { UserStatusBar } from '../../Components/FriendsCard/Card'
import './FriendsPage.css';
import { PrimaryButton } from '../../Components/Button/PrimaryButton';

const dummyUsers = [
  {
    username: 'JohnDoe',
    level: 50,
    country: 'USA',
    additionalInfo: 'Loves coding',
    isOnline: true,
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    username: 'JaneSmith',
    level: 30,
    country: 'Canada',
    additionalInfo: 'Nature enthusiast',
    isOnline: false,
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    username: 'NoProfilePicUser',
    level: 70,
    country: 'India',
    additionalInfo: 'AI researcher',
    isOnline: true,
    profilePic: null, // No profile picture
  },
];

const FriendsPage = () => {
  return (
    <div>
      <div className='buttons-section'>
          <PrimaryButton title='Find Friends' fn={() => alert('Primary Button Clicked')} />
          <PrimaryButton title='Friend Requests' fn={() => alert('Secondary Button Clicked')} />
      </div>
      <div className='display-friend-section'>
      {dummyUsers.map((user, index) => (
        <UserStatusBar
          key={index}
          username={user.username}
          level={user.level}
          country={user.country}
          additionalInfo={user.additionalInfo}
          isOnline={user.isOnline}
          profilePic={user.profilePic}
        />
      ))}
      </div>
    </div>
  );
};

export default FriendsPage;
