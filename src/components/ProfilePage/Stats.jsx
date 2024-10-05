import React from 'react';

const Stats = ({ gamesPlayed, wins }) => {
  return (
    <div className="stats-section">
      <div className="stat-item">
        <label>No. of Ludo Games</label>
        <span>{gamesPlayed}</span>
      </div>
      <div className="stat-item">
        <label>No. of Wins</label>
        <span>{wins}</span>
      </div>
    </div>
  );
};

export default Stats;
