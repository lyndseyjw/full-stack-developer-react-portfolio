import React from 'react';
import './About.css';
import aboutMePhoto from './assets/images/about-me-photo.JPG';

export default function About() {
    return (
        <section id="about-me">

            <div id="about-me-div1">

                <h1>ABOUT ME</h1>

                <img src={aboutMePhoto} alt="Lyndsey at the beach"/>
            </div>

            <div id="about-me-div2">

                <p>
                    A rooky coder who learns quickly &#38; produces quality products regardless of current minimal experience. 
                    As a passionate student with a commitment to lifelong learning, I thoroughly enjoy the opportunity to problem solve &#38; practice a new skill (with the goal of mastering it of course). 
                    I aim to balance design &#38; function in all aspects of my life &#38; appreciate how web development allows me the opportunity to bring this marriage to life in such a responsive way.
                    After living as a strong left-brainer my entire life, I am elated to find a profession that allows me to express my neglected creative side (&#38; use logic to do so!)
                </p>

                <br/><br/>

                <p>
                    A hard worker, I work ceaselessly until I have created a quality product that I am proud to share.
                    I maintain a strong commitment to reliability &#38; efficiency &#38; I am not afraid to communicate that I need help.
                    Appreciative of a collaborative environment, I thrive when given the opportunity to invent &#38; create.
                    Many ideas of how to make the world a better place are always popping into my head &#38; I look forward to finding a team of like-minded individuals so we can pool our resources &#38; create something impactful!
                </p>
            
            </div>

        </section>
    )
}