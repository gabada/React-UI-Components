import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent  from './CardContent';


const CardContainer = () => {
    return (
        <a href="https://www.reactjs.org"><div className="card-container">
            <CardBanner />
            <div className="card">
                <CardContent />
            </div>
        </div></a>
    )
}

export default CardContainer;
