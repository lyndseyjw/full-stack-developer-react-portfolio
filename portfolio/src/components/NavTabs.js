import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavTabs.css';
import resume from "../pages/assets/files/resume.pdf"

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
        <h1>LYNDSEY</h1>
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                    HOME
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                    ABOUT
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#work"
                    onClick={() => handlePageChange('Work')}
                    className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                    >
                    WORK
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                    CONTACT
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    href={resume}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='nav-link'
                    >
                    RESUME
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default NavTabs;