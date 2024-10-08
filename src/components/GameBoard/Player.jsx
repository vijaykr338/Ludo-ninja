import React from 'react'
import gojo from './gojo.png'
import { CiTrophy } from "react-icons/ci";

import './Player.css'

const Player = () => {
  return (
    <div className='player-container'>
        <div >
        <img className='profile-picture' src={gojo} alt="Player" />
        </div>

        <h3>repulsiveSky</h3>

        <h4><CiTrophy /> <span className='trophies'>1242</span></h4>
    </div>
  )
}

export default Player