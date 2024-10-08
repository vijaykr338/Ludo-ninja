import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {

  return (

    <div className="bgimage">
      <header className="header">

        <div className="top-section">
          <Link to="/profile">
            <div className="top-left"></div>
          </Link>
          <img src='/logo.png' width='300px' />
        </div>

       
          <div className="top-right">
            <Link to="/signUp">
        <button className='btns1'>Sign Up</button>
            </Link>
            <Link to="/login">
        <button className='btns2'>Sign In</button>
            </Link>

          </div>
        

      </header>

      <main className="main-content">
        <Link to="/play">
          <button className="play-button">PLAY ONLINE</button>
        </Link>

        <Link to="/friend">
          <button className="friends-button">FRIENDS</button>
        </Link>
      </main>

    </div>

  );
};

export default HomePage;
