import React from 'react';
import './Portfolio.css';
import parkSmart from "./assets/images/parksmart.png"
import techBlog from "./assets/images/techblog.jpg"
import weatherDashboard from './assets/images/weather-dashboard.png'
import employeeTracker from "./assets/images/add-role.png"
import timedQuiz from "./assets/images/timed-quiz.jpg"
import workoutTracker from "./assets/images/workout-tracker.png"

export default function Portfolio() {
    return (
        <section id="work">
            <div id="wrapper">
                <div className="image-container">
                    <img src={parkSmart} alt="aerial view of four-way intersection"/>
                    <div className="image-caption">
                        <h1>Park Smart</h1>
                        <div className='flex'>
                            <a href="https://parksmart2021.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa font-size">&#xf109;</i>
                            </a>
                            <a href="https://github.com/lyndseyjw/ParkSmart" target="_blank" rel="noopener noreferrer">
                                <i className="fa margin-left font-size">&#xf09b;</i>
                            </a>
                        </div>
                        <p>HTML5, Advanced CSS, Javscript, Express, Node, NPMs, Sequelize, Heroku</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={techBlog} alt="holograms of technology platforms emerging from a tablet in someone's palm"/>
                    <div className="image-caption">
                        <h1>Tech Blog</h1>
                        <div className="flex">
                            <a href="https://sheltered-journey-74962.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fa font-size">&#xf109;</i>
                            </a>
                            <a href="https://github.com/lyndseyjw/tech-blog" target="_blank" rel="noopener noreferrer">
                                <i className="fa margin-left font-size">&#xf09b;</i>
                            </a>
                        </div>
                        <p>HTML5, CSS, Javascript, Express, Node, NPMs, Sequelize, Heroku</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={workoutTracker} alt="a graph showing number of pounds lifted over the course of several days"/>
                    <div className="image-caption">
                        <h1>Workout Tracker</h1>
                        <div className="flex">
                            <a href="https://dry-wildwood-23805.herokuapp.com/?id=616791de69fdd7001603dc9b" target="_blank" rel="noopener noreferrer" >
                                <i className="fa font-size">&#xf109;</i>
                            </a>
                            <a href="https://github.com/lyndseyjw/workout-tracker" target="_blank" rel="noopener noreferrer">
                                <i className="fa margin-left font-size">&#xf09b;</i>
                            </a>
                        </div>
                        <p>HTML5, Advanced CSS, Javascript, Node, NPMs, Express, Mongoose</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={weatherDashboard} alt="weather emojis - sunny, cloudy, rainy, lightning"/>
                    <div className="image-caption">
                        <h1>Weather Dashboard</h1>
                        <div className="flex">
                            <a href="https://lyndseyjw.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
                                <i className="fa font-size">&#xf109;</i>
                            </a>
                            <a href="https://github.com/lyndseyjw/weather-dashboard" target="_blank" rel="noopener noreferrer">
                                <i className="fa margin-left font-size">&#xf09b;</i>
                            </a>
                        </div>
                        <p>HTML5, CSS, JQuery</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={employeeTracker} alt="command line display of console.table with employee database information"/>
                    <div className="image-caption">
                        <h1>Backend Employee DB</h1>
                        <div className="flex">
                            <a href="https://github.com/lyndseyjw/employee-tracker-database" target="_blank" rel="noopener noreferrer" >
                                <i className="fa font-size">&#xf109;</i>
                            </a>
                            <a href="https://github.com/lyndseyjw/employee-tracker-database" target="_blank" rel="noopener noreferrer">
                                <i className="fa margin-left font-size">&#xf09b;</i>
                            </a>
                        </div>
                        <p>JavaScript, Node, NPMs, MySQL</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={timedQuiz} alt="a countdown graphic displaying the number 5"/>
                    <div className="image-caption">
                        <h1>Timed Quiz</h1>
                        <div className="flex">
                            <a href="https://lyndseyjw.github.io/timed-quiz-with-saved-high-scores/" target="_blank" rel="noopener noreferrer" >
                                <i className="fa font-size">&#xf109;</i>
                            </a>
                            <a href="https://github.com/lyndseyjw/timed-quiz-with-saved-high-scores" target="_blank" rel="noopener noreferrer">
                                <i className="fa margin-left font-size">&#xf09b;</i>
                            </a>
                        </div>
                        <p>HTML5, Advanced CSS, Javascript</p>
                    </div>
                </div>
            </div>
        </section>
    )
}