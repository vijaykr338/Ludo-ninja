import React from 'react';

const Trophies = ({ trophies }) => {
  return (
    <div className="trophies-section">
      <label>Trophies 🏆</label>
      <span>{trophies}</span>
    </div>
  );
};

export default Trophies;
