import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavTabs.css';
import resume from "../pages/assets/files/resume.pdf";
import { DropdownButton, Dropdown } from 'react-bootstrap'

function NavTabs({ currentPage, handlePageChange, pageTab, setPageTab}) {

    return (
        <header>
            <h1>LYNDSEY WATSON</h1>
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
                            href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            PORTFOLIO
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
                <DropdownButton id="dropdown" title={pageTab} variant="light">
                    <Dropdown.Item 
                        href="#home"
                        onClick={() => { handlePageChange('Home'); setPageTab('Home')}}
                    >
                        HOME
                    </Dropdown.Item>
                    <Dropdown.Item 
                        href="#about"
                        onClick={() => { handlePageChange('About'); setPageTab('About')}}
                    >
                        ABOUT
                    </Dropdown.Item>
                    <Dropdown.Item 
                        href="#portfolio"
                        onClick={() => { handlePageChange('Portfolio'); setPageTab('Portfolio')}}
                    >
                        PORTFOLIO
                    </Dropdown.Item>
                    <Dropdown.Item 
                        href="#contact"
                        onClick={() => { handlePageChange('Contact'); setPageTab('Contact')}}
                    >
                        CONTACT
                    </Dropdown.Item>
                    <Dropdown.Item 
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='nav-link'
                    >
                        RESUME
                    </Dropdown.Item>
                </DropdownButton>
            </nav>
        </header>
    );
}

export default NavTabs;