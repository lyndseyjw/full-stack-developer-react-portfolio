import React, { useState } from 'react';
import './Portfolio.css';
import RemindModal from './remindModal';
import ParkSmartModal from './parkSmartModal';
import TechModal from './techModal';
import WeatherModal from './weatherModal';
import WorkoutModal from './workoutModal';
import EmployeeModal from './employeeModal';
import remind from "./assets/images/remind.png";
import parkSmart from "./assets/images/parksmart.png"
import techBlog from "./assets/images/techblog.jpg"
import weatherDashboard from './assets/images/weather-dashboard.png'
import employeeTracker from "./assets/images/add-role.png"
import workoutTracker from "./assets/images/workout-tracker.png"

export default function Portfolio() {

    const [remindModalShow, setRemindModalShow] = useState(false);
    const [parkSmartModalShow, setParkSmartModalShow] = useState(false);
    const [techModalShow, setTechModalShow] = useState(false);
    const [weatherModalShow, setWeatherModalShow] = useState(false);
    const [workoutModalShow, setWorkoutModalShow] = useState(false);
    const [employeeModalShow, setEmployeeModalShow] = useState(false);

    return (
        <section id="work">
            < RemindModal show={remindModalShow} onHide={() => setRemindModalShow(false)} />
            < ParkSmartModal show={parkSmartModalShow} onHide={() => setParkSmartModalShow(false)} />
            < TechModal show={techModalShow} onHide={() => setTechModalShow(false)} />
            < WeatherModal show={weatherModalShow} onHide={() => setWeatherModalShow(false)} />
            < WorkoutModal show={workoutModalShow} onHide={() => setWorkoutModalShow(false)} />
            < EmployeeModal show={employeeModalShow} onHide={() => setEmployeeModalShow(false)} />
            <div id="wrapper">
                <div className="image-container">
                    <img src={remind} alt="green plant against white wall with re:mind logo" />
                    <div className="image-caption" onClick= {() => setRemindModalShow(true)}>
                        <h1>re:mind</h1>
                        <p>MERN Full Stack Web Application that allows users to gain new insights on how their physical habits affect their mental state</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={parkSmart} alt="aerial view of four-way intersection" />
                    <div className="image-caption" onClick= {() => setParkSmartModalShow(true)}>
                        <h1>Park Smart</h1>
                        <p>MVC-Structured Full Stack Web Application that allows users living in a congested neighborhood to find parking and manage their day accordingly</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={techBlog} alt="holograms of technology platforms emerging from a tablet in someone's palm" />
                    <div className="image-caption" onClick= {() => setTechModalShow(true)}>
                        <h1>Tech Blog</h1>
                        <p>MVC-Structured Full Stack Web Application that allows fellow tech enthusiasts to share personal insights into and stay up to date on the latest trends in the tech world</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={weatherDashboard} alt="weather emojis - sunny, cloudy, rainy, lightning" />
                    <div className="image-caption" onClick= {() => setWeatherModalShow(true)}>
                        <h1>Weather Dashboard</h1>
                        <p>Front End Web Application utilizing third-party API fetch requests and local storage so users may search for 5-day weather forecasts and save their search history for a more personal and convenient experience </p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={workoutTracker} alt="a graph showing number of pounds lifted over the course of several days" />
                    <div className="image-caption" onClick= {() => setWorkoutModalShow(true)}>
                        <h1>Workout Tracker</h1>
                        <p>MVC-Structured Full Stack Web Application that allows users to track their exercise progress so they may meet their fitness goals </p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={employeeTracker} alt="command line display of console.table with employee database information" />
                    <div className="image-caption" onClick= {() => setEmployeeModalShow(true)}>
                        <h1>Employee Tracker Database</h1>
                        <p>Back End Web Application that allows web developers to manage their company's employee structure</p>
                    </div>
                </div>
            </div>
        </section>
    )
}