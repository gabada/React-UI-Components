import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <div>
            <button>{props.number}</button>
        </div>
    );
};

export default NumberButton;