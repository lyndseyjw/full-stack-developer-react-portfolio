import React from 'react';
import { Modal } from 'react-bootstrap';
import './Portfolio.css';

export default function weatherModal({ onHide, show }) {
    return (
        <Modal show={show} onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Weather Dashboard
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Languages and Technologies</h4>
                <p className="padding-top">HTML5, CSS, JQuery, API-fetch, Local Storage </p>
                <div className="flex">
                    <a href="https://lyndseyjw.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
                        <i className="fa black">&#xf109;</i>
                    </a>
                    <a href="https://github.com/lyndseyjw/weather-dashboard" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github margin-left black"></i>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}