import React from 'react';
import './Footer.css';

let total_comments = 0;

const Footer = () => {
    return (
        <div className="footer">
            <i className="fas fa-comment" onClick={comment}>{total_comments}</i>
            <i className="fas fa-sync" onClick={repost}></i>
            <i className="fas fa-heart" onClick={heart}></i>
            <i className="fas fa-envelope" onClick={email}></i>
        </div>
    );
}


const comment = () => {
    total_comments += 1;
    console.log(total_comments);
    console.log('COMMENTED');
    return total_comments;
}

const repost = () => {
    console.log('REPOSTED');
}

const heart = () => {
    console.log('HEARTED');
}

const email = () => {
    console.log('EMAILED');
}

export default Footer;