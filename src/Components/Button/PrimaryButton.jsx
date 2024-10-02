import React from 'react';
import './PrimaryButton.css';
export const PrimaryButton = ({ title, fn }) => {
    return (
        <button className="btn" onClick={fn}>
        {title}
        </button>
    );
}