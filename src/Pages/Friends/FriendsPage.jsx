import React, { useState } from 'react';
import { UserStatusBar } from '../../components/FriendsPage/FriendsCard/Card'
import './FriendsPage.css';
import { PrimaryButton } from '../../components/FriendsPage/Button/PrimaryButton';
import dummyUsers from '../../dummyData/dummyData.json'
import Search from '../../components/FriendsPage/FindFriends/FindFriends'
import Requests from '../../components/FriendsPage/FriendReq/FriendReq'



const FriendsPage = () => {
  
  const [showSearch, setShowSearch] = useState(false);
  const [showRequests, setShowRequests] = useState(false);
  const sortedUsers = dummyUsers.sort((a, b) => a.trophies - b.trophies);

  return (
    <>

      <div className='friend-componet-wrapper'>
        <div className="title">
          <h1>FRIENDS</h1>
        </div>

        <div className='buttons-section'>
            <PrimaryButton title='Search People' fn={() => setShowSearch(true)} />
            <PrimaryButton title='Friend Requests' fn={() => setShowRequests(true)} />
        </div>
        <div className='display-friend-section'>
        {sortedUsers.map((user, index) => (
          <UserStatusBar
          key={index}
          username={user.username}
          level={user.rank}
          country={user.country}
          additionalInfo={user.trophies}
          isOnline={user.isOnline}
          profilePic={user.profilePic}
          />
        ))}
        </div>
      </div>


      {showSearch && 
      <div className="bg">
        <div className='serach-friend'>
          <PrimaryButton className='close-btn' title='Close' fn={()=>{setShowSearch(false)}} />
          <Search/>
        </div>
      </div>
      }


    {showRequests && 
      <div className="bg">
        <div className='serach-friend'>
          <PrimaryButton className='close-btn' title='Close' fn={()=>{setShowRequests(false)}} />
          <Requests/>
        </div>
      </div>
    }

  </>
  );
};

export default FriendsPage;
