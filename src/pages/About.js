import React, { useState } from 'react';
import './About.css';
import aboutMePhoto from './assets/images/about-me-photo.JPG';
import mongo from './assets/images/mongodb-icon.png';
import express from './assets/images/expressjs-icon.png';
import graphql from './assets/images/graphql-icon.png';
import jwt from './assets/images/jwt.png';
import handlebars from './assets/images/handlebars-icon.png';
import moment from './assets/images/moment-js-logo.png';
import rest from './assets/images/rest-api.png';
import sequelize from './assets/images/sequelize.png';
import jquery from './assets/images/jquery-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    button: {
        visible: {
            visibility: 'visible'
        },
        hidden: {
            visibility: 'hidden'
        }
    },
    icons: {
        visible: {
            visibility: 'visible',
            fontSize:'80px',
        },
        hidden: {
            visibility: 'hidden'
        }
    }
}

export default function About() {

    const [hiddenButton, setHiddenButton] = useState(false);
    const [visibleIcons, setVisibleIcons] = useState(false);

    const handleStyle = (event) => {
        event.preventDefault()
        setHiddenButton(true)
        setVisibleIcons(true)
        // ontransitionrun()
    }

    return (
        <section id="about-me">

            <div id="about-me-div1">

                <img className="beach" src={aboutMePhoto} alt="Lyndsey at the beach"/>
            </div>

            <div id="about-me-div2">

                <br/>

                <p>
                    Full Stack Web Developer merging logic and innovation. Known as an innate problem-solver with a keen attention to detail and dedicated work ethic. 
                    Passionate about long-term sustainability with a focus on prevention and accountability.
                </p> 
                <div className="box-shadow">
                    Earned a full stack web development certificate through UCLA’s Intensive Coding Bootcamp and achieved two awards : <br/>
                    <ul className='list'>
                        <li className='award'>&nbsp;&nbsp;"Always Brings a Can-Do Atittude" when approaching projects and no task is too daunting or challenging </li>
                        <li className='award'>&nbsp;&nbsp;"Best Ideation Award" .. the person you always want to work with in a group for their collaborative skills</li>
                    </ul>
                </div>
                <p className="margin-top">
                    In 12 weeks, successfully created 3 major web applications, with a group, and 22 Github repositories + deployed applications, individually. 
                    Quickly integrated a full stack skill set with an exemplary understanding of JavaScript / React, GraphQL, and Mongoose / MongoDB. 
                    Eager to apply my technical skills with a courageous group of individuals willing to break unprecedented ground in what technology could offer, if the right intentions were present, I am committed to a life of learning and will always provide ideas and work of the highest caliber.

                </p>
            </div>
            <div className="column black container">
                <div className="overlay">
                    <button style={hiddenButton? styles.button.hidden : styles.button.visible} className="tech" onClick={handleStyle}>Technology and Language Skills</button>
                </div>
                <div className="bottom">
                    <div className="between transition row">
                        <i style={visibleIcons? styles.icons.visible : styles.icons.hidden} className="fab fa-react transition icon col-4 col-md-1" data-react></i>
                        <i style={visibleIcons? styles.icons.visible : styles.icons.hidden} className="fab fa-js-square  transition icon col-4 col-md-1"></i>
                        <img src={express} style={visibleIcons? styles.icons.visible : styles.icons.hidden} className=" transition image col-4 col-md-1"></img>
                        <i style={visibleIcons? styles.icons.visible : styles.icons.hidden} className="fab fa-node  transition icon col-4 col-md-1"></i>
                        <img src={jwt} style={visibleIcons? styles.icons.visible : styles.icons.hidden} className=" transition image col-4 col-md-1"></img>
                        <img src={graphql} style={visibleIcons? styles.icons.visible : styles.icons.hidden} className=" transition image col-4 col-md-1"></img>
                        <img src={mongo} style={visibleIcons? styles.icons.visible : styles.icons.hidden} className=" transition image col-4 col-md-1"></img>
                    </div>
                    <div className="padding-top between transition row">
                        <i style={visibleIcons? styles.icons.visible : styles.icons.hidden} className="fab fa-html5 transition icon col-4 col-md-1"></i>
                        <i style={visibleIcons? styles.icons.visible : styles.icons.hidden} className="fab fa-css3  transition icon col-4 col-md-1"></i>
                        <i style={visibleIcons? styles.icons.visible : styles.icons.hidden} className="fab fa-bootstrap  transition icon col-4 col-md-1"></i>
                        <img src={jquery} style={visibleIcons? styles.icons.visible : styles.icons.hidden} className=" transition image col-4 col-md-1"></img>
                        <img src={moment} style={visibleIcons? styles.icons.visible : styles.icons.hidden} className=" transition image col-4 col-md-1"></img>
                    </div>
                    <div className="padding-top between transition row">
                        <img src={handlebars} style={visibleIcons? styles.icons.visible : styles.icons.hidden} className='transition col-4 col-md-1'></img>
                        <img src={rest} style={visibleIcons? styles.icons.visible : styles.icons.hidden} className=" transition image col-4 col-md-1"></img>
                        <img src={sequelize} style={visibleIcons? styles.icons.visible : styles.icons.hidden} className=" transition image col-4 col-md-1"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}