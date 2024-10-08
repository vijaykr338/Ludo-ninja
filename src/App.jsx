
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FriendsPage from './Pages/Friends/FriendsPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage.jsx'
import HomePage from './Pages/HomePage/Homepage.jsx'

import './App.css'
import GameBoard from './Pages/GameBoardPage/GameBoard.jsx';
import Signup from './Pages/AuthenticationPage/SignUp.jsx'
import Login from './Pages/AuthenticationPage/Login.jsx'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />          {/* Home Page Route */}
          <Route path="/friend" element={<FriendsPage />} />  {/* Friend Page Route */}
          <Route path="/profile" element={<ProfilePage />} />   
          <Route path='/play' element={<GameBoard/>} />   
          <Route path='/signUp'element={<Signup/>}/>    
          <Route path='/login'element={<Login/>}/>    
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
