import React, { useState, useEffect, useRef } from 'react';
import './Card.css'; 

// Dummy SVG for three dots 
const MoreIcon = ({ onClick }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="24" 
    height="24"
    className="more-icon"
    onClick={onClick} 
  >
    <circle cx="12" cy="5" r="2"></circle>
    <circle cx="12" cy="12" r="2"></circle>
    <circle cx="12" cy="19" r="2"></circle>
  </svg>
);

export const UserStatusBar = ({ username, level, country, additionalInfo, isOnline, profilePic }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null); // Reference to the popup

  const togglePopup = () => {
    setPopupVisible((prev) => !prev); // Toggle the popup visibility
  };

  const handleClickOutside = (event) => {
    // Check if the click happened outside the popup
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopupVisible(false); 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="user-status-bar">
      <div className="user-icon">
        {profilePic ? (
          <img src={profilePic} width={24} height={24} alt="profile" className="icon" />
        ) : (
          <div className="default-icon"> 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              width="24" 
              height="24"
              className="icon"
            >
              <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z"></path>
            </svg>
          </div>
        )}
      </div>    
      <div className="user-info">
        <div className="username">{username}</div>
        <div className="additional-info">
          <span className="level">lvl {level}</span> | {country} |
          <span className="extra-info"> {additionalInfo}</span>
        </div>
      </div>
      <div className="status">
        <div className={`status-indicator ${isOnline ? 'online' : 'offline'}`}></div>
        <span className="status-text">{isOnline ? 'online' : 'offline'}</span>
      </div>
      <MoreIcon onClick={togglePopup} /> 

      {/* Popup menu for more options */}
      {isPopupVisible && (
        <div className="popup-menu" ref={popupRef}>
          <ul>
            <li onClick={() => alert('Invite clicked')}>Invite</li>
            <li onClick={() => alert('Remove clicked')}>Remove</li>
            <li onClick={() => alert('Visit Profile clicked')}>Visit Profile</li>
          </ul>
        </div>
      )}
    </div>
  );
};
