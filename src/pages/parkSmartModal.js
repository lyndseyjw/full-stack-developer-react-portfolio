import React from 'react';
import { Modal } from 'react-bootstrap';
import './Portfolio.css';

export default function parkSmartModal({ onHide, show }) {
    return (
        <Modal show={show} onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Park Smart
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Languages and Technologies</h4>
                <p className="padding-top">Handlebars, Bootstrap, CSS, Javascript, Moment.js, Session-Cookie, RESTful API, Node, Express, Sequelize, mySQL, Heroku </p>
                <div className='flex'>
                    <a href="https://parksmart2021.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa black">&#xf109;</i>
                    </a>
                    <a href="https://github.com/lyndseyjw/ParkSmart" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github margin-left black"></i>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}