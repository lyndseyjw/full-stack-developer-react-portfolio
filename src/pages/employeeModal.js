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
                <p className="padding-top">JavaScript, Node.js, Inquirer, Sequelize, mySQL </p>
                <div className="flex">
                <a href="https://drive.google.com/file/d/1Y8xz6AzSLeE4SS89jjYlznI2y-PvsYNw/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                        <i className="fa black">&#xf109;</i>
                    </a>
                    <a href="https://github.com/lyndseyjw/employee-tracker-database" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github margin-left black"></i>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    );
}