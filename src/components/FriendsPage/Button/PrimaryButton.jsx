import React from 'react';
import './PrimaryButton.css';
export const PrimaryButton = ({className, title, fn }) => {
    return (
        <button className={"btn "+className} onClick={fn}>
        {title}
        </button>
    );
}