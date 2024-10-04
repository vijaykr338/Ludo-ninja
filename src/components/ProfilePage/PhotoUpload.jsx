import React, { useState } from 'react';

const PhotoUpload = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="photo-upload">
      <img src={photo || 'public/Profile.png'} alt="Profile" className="profile-photo" />
      <input type="file" onChange={handlePhotoChange} className="upload-button" />
      <label> Change Profile Picture</label>
    </div>
  );
};

export default PhotoUpload;
