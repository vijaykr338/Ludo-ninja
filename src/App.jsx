import { useState, useEffect } from 'react'
import FriendsPage from './Pages/Friends/FriendsPage'
import Signup from './Pages/AuthenticationPage/Signup'
import Login from './Pages/AuthenticationPage/Login'
import Search from './components/FriendsPage/FindFriends/FindFriends.jsx'
import Requests from './components/FriendsPage/FriendReq/FriendReq.jsx'
import './App.css'

function App() {
 
  

  return (
    <div>
      <FriendsPage />            
    </div>
  )
}

export default App
