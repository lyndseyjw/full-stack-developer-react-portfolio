import React, { useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <section id="contact">

            <h1> I'd Love to Hear From You! </h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit} className="smallerContainer">
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        style = {{ backgroundColor: 'whitesmoke' }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        style = {{ backgroundColor: 'whitesmoke' }}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Send me a Message!</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        style = {{ backgroundColor: 'whitesmoke' }}
                    />
                </Form.Group>
                <Button variant="light" type="submit">
                    Submit
                </Button>
            </Form>

        </section>
    )
}