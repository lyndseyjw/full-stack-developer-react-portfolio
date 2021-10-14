import React from 'react';
import './Footer.css';
import gitHub from '../pages/assets/images/github.png';
import linkedIn from '../pages/assets/images/linkedin.png';

function Footer() {

    return (
        <footer>
            <a href='https://github.com/lyndseyjw' target="_blank" rel="noopener noreferrer"><i className="fa margin-left font-size">&#xf09b;</i></a>
            <a href='https://www.linkedin.com/in/lyndseyjw' target="_blank" rel="noopener noreferrer"><i className="fa margin-left font-size">&#xf08c;</i></a>
            <a href='https://stackoverflow.com/users/16270340/lyndseyjw' target="_blank" rel="noopener noreferrer"><i className="fa margin-left font-size">&#xf16c;</i></a>
        </footer>
    )
}

export default Footer;