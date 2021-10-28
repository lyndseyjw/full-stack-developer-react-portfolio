import React from 'react';
import { Modal } from 'react-bootstrap';
import './Portfolio.css';

export default function employeeModal({ onHide, show }) {
    return (
        <Modal show={show} onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Employee Tracker Database
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Languages and Technologies</h4>
                <p className="padding-top">Javascript, Node, Inquirer, Sequelize, mySQL </p>
                <div className="flex">
                    <a href="https://github.com/lyndseyjw/employee-tracker-database" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github black"></i>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}