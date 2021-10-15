import React, { useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState(false);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'name') {
          setName(inputValue);
        } else if (inputType === 'email') {
          setEmail(inputValue);
        } else {
          setContent(inputValue);
        }
    };

    const handleSubmit = (event) => {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } 
        event.preventDefault();
        setMessage(true);
        setName('');
        setEmail('');
        setContent('');
        setValidated(true);
    };

    return (
        <section id="contact">

            <h1> Let's Work Together! </h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit} className="smallerContainer">
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        style={{ backgroundColor: 'whitesmoke' }}
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationEmail">
                    <Form.Label>Your Email Address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        style={{ backgroundColor: 'whitesmoke' }}
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Thoughts</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={5}
                        style={{ backgroundColor: 'whitesmoke' }}
                        value={content}
                        name="content"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="light" type="submit">
                    Submit
                </Button>
            </Form>
            <p>{message ? 'Connection Made!' : ''}</p>

        </section>
    )
}