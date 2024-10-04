import React from 'react';

const UUID = ({ uuid }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(uuid);
    alert('UUID copied to clipboard!');
  };

  return (
    <div className="uuid-section">
      <label>UUID</label>
      <span>{uuid}</span>
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
};

export default UUID;
