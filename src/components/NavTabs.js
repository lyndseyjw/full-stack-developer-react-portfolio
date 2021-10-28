import React from 'react';
// import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavTabs.css';
import resume from "../pages/assets/files/resume.pdf"

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>LYNDSEY WATSON</h1>
            {/* <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Welcome to my Portfolio</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link
                                    href="#home"
                                    onClick={() => handlePageChange('Home')}
                                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                                >
                                    HOME
                                </Nav.Link>
                                <Nav.Link
                                    href="#about"
                                    onClick={() => handlePageChange('About')}
                                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                >
                                    ABOUT
                                </Nav.Link>
                                <Nav.Link 
                                    href="#portfolio"
                                    onClick={() => handlePageChange('Portfolio')}
                                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                                >
                                    PORTFOLIO
                                </Nav.Link>
                                <Nav.Link 
                                    href="#contact"
                                    onClick={() => handlePageChange('Contact')}
                                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                >
                                    CONTACT
                                </Nav.Link>
                                <Nav.Link 
                                    href={resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='nav-link'
                                >
                                    RESUME
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar> */}
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
            </nav>
        </header>
    );
}

export default NavTabs;