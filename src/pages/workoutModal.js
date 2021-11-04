import React from 'react';
import { Modal } from 'react-bootstrap';
import './Portfolio.css';

export default function workoutModal({ onHide, show }) {
    return (
        <Modal show={show} onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Workout Tracker
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Languages and Technologies</h4>
                <p className="padding-top">HTML5, CSS, JavaScript, RESTful APIs, Express.js, Node.js, Moongoose, MongoDB, Heroku </p>
                <div className="flex">
                    <a href="https://dry-wildwood-23805.herokuapp.com/?id=616791de69fdd7001603dc9b" target="_blank" rel="noopener noreferrer" >
                        <i className="fa black">&#xf109;</i>
                    </a>
                    <a href="https://github.com/lyndseyjw/workout-tracker" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github margin-left black"></i>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}