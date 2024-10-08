
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FriendsPage from './Pages/Friends/FriendsPage'
import ProfilePage from './Pages/ProfilePage/ProfilePage.jsx'
// import Signup from './Pages/AuthenticationPage/Signup'
// import Login from './Pages/AuthenticationPage/Login'
import HomePage from './Pages/HomePage/HomePage.jsx'
import Search from './components/FriendsPage/FindFriends/FindFriends.jsx'
import Requests from './components/FriendsPage/FriendReq/FriendReq.jsx'
import './App.css'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />          {/* Home Page Route */}
          <Route path="/friend" element={<FriendsPage />} />  {/* Friend Page Route */}
          <Route path="/profile" element={<ProfilePage />} />          {/* Home Page Route */}
        </Routes>
      </Router>

      {/* <Signup></Signup>
      <Login></Login> */}
    </div>
  );
}

export default App;
