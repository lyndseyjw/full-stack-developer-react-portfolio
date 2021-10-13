import React from 'react';
import './Work.css';
import weatherDashboard from './assets/images/weather-dashboard.png'

export default function Work() {
    return (
        <section>
            <div id="wrapper">
                <a href="https://parksmart2021.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="image-container">
                    <img src="./assets/images/parksmart.png" alt="aerial view of four-way intersection"/>
                    <div className="image-caption">
                        <h1>Park Smart</h1>
                        <p>HTML5, Advanced CSS, Javscript, Sequelize, Express, NPMs, Heroku</p>
                    </div>
                </a>
                <a href="https://sheltered-journey-74962.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="image-container">
                    <img src="./assets/images/techblog.jpg" alt="holograms of technology platforms emerging from a tablet in someone's palm"/>
                    <div className="image-caption">
                        <h1>Tech Blog</h1>
                        <p>HTML5, CSS, Javascript, Sequelize, Express, NPMs, Heroku</p>
                    </div>
                </a>
                <a href="https://lyndseyjw.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer" className="image-container">
                    <img src={weatherDashboard} alt="weather emojis - sunny, cloudy, rainy, lightning"/>
                    <div className="image-caption">
                        <h1>Weather Dashboard</h1>
                        <p>HTML5, CSS, JQuery</p>
                    </div>
                </a>
                <a href="https://github.com/lyndseyjw/employee-tracker-database" target="_blank" rel="noopener noreferrer" className="image-container">
                    <img src="./assets/images/add-role.png" alt="command line display of console.table with employee database information"/>
                    <div className="image-caption">
                        <h1>Backend Employee Tracker DB</h1>
                        <p>JavaScript, Node, NPMs, mySQL</p>
                    </div>
                </a>
                <a href="https://lyndseyjw.github.io/timed-quiz-with-saved-high-scores/" target="_blank" rel="noopener noreferrer" className="image-container">
                    <img src="./assets/images/timed-quiz.jpg" alt="a countdown graphic displaying the number 5"/>
                    <div className="image-caption">
                        <h1>Timed Quiz</h1>
                        <p>HTML5, Advanced CSS, Javascript</p>
                    </div>
                </a>
            </div>
        </section>
    )
}