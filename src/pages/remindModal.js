import React from 'react';
import { Modal } from 'react-bootstrap';
import './Portfolio.css';

export default function remindModal({ onHide, show }) {
    return (
        <Modal show={show} onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    re:mind
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Languages and Technologies</h4>
                <p className="padding-top">React, Javascript, Moment.js, CSS, Bootstrap, JWT-Authentication, Node.js, Express, GraphQl, Mongoose, MongoDB, Heroku</p>
                <div className='flex'>
                    <a href="https://re-mind-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fa black">&#xf109;</i>
                    </a>
                    <a href="https://github.com/lyndseyjw/re_mind" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github margin-left black"></i>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}