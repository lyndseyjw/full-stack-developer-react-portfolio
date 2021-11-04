import React from 'react';
import { Modal } from 'react-bootstrap';
import './Portfolio.css';

export default function techModal({ onHide, show }) {
    return (
        <Modal show={show} onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Tech Blog
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Languages and Technologies</h4>
                <p className="padding-top">Handlebars.js, Bootstrap, CSS, JavaScript, Session-Cookie, RESTful APIs, Express.js, Node.js, Sequelize, mySQL, Heroku </p>
                <div className="flex">
                    <a href="https://sheltered-journey-74962.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa black">&#xf109;</i>
                    </a>
                    <a href="https://github.com/lyndseyjw/tech-blog" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github margin-left black"></i>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}