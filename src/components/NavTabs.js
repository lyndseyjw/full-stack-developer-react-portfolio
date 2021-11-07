import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavTabs.css';
import resume from "../pages/assets/files/resume.pdf";
import Button from 'react-bootstrap/Button';

function NavTabs({ currentPage, handlePageChange }) {

    const [page, setPage] = useState('Home');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputValue === 'Home') {
            setPage(inputValue);
        } else if (inputValue === 'About') {
            setPage(inputValue);
        } else if (inputValue === 'Portfolio') {
            setPage(inputValue);
        } else if (inputValue === 'Contact') {
            setPage(inputValue);
        } else {
            setPage(inputValue);
        }
    };

    // const handleChange = ({page}) => {
    //     handlePageChange(page);
    // }

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
                <select onChange={handleInputChange}>
                    <option value="" selected="selected">*</option>

                    <option 
                        value="Home"
                    >
                        HOME
                    </option>
                    <option 
                        value="About"
                    >
                        ABOUT
                    </option>
                    <option 
                        value="Portfolio"
                    >
                        PORTFOLIO
                    </option>
                    <option 
                        value="Contact"
                    >
                        CONTACT
                    </option>
                    <option 
                        value={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='nav-link'
                    >
                        RESUME
                    </option>
                </select>
                <Button variant="light" id='visitButton' onClick={() => handlePageChange({page})}>
                    Visit
                </Button>
            </nav>
        </header>
    );
}

export default NavTabs;