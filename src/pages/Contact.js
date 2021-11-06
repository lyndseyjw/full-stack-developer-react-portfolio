import React, { useState, useRef } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

const styles = {
    message: {
        visible: {
            visibility: 'visible'
        },
        hidden: {
            visibility: 'hidden'
        }
    }
}

export default function Contact({ onPageChange }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const [validated, setValidated] = useState(false);

    const [message, setMessage] = useState(false)

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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            emailjs.sendForm('service_g7oc67p', 'template_bxsaoon', form.current, 'user_o4QGNHNr4dPElGw0IgZAC')
            .then((result) => {
                console.log(result.text)
                setMessage(true);
            }, (error) => {
                console.log(error.text);
            });

            e.preventDefault();
            
            onPageChange("Contact")
        }
        setValidated(true);  
    };

    return (
        <section id="contact">

            <h1> Let's Work Together! </h1>

            <Form noValidate validated={validated} ref={form} onSubmit={sendEmail} className="smallerContainer" id="contact-form">
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label>Your Name / Company</Form.Label>
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
                <Button variant="light" type="submit" value="Send" id='sendButton'>
                    Submit
                </Button>
            </Form>
            <div className='center padding-top'>
                <a href="mailto:lyndseyjwatson@gmail.com">lyndseyjwatson@gmail.com</a>
            </div>
            <div className='center padding-top margin-bottom'>
                <a id="number" href="#contact">(832) 687-2196</a>
            </div>
        </section>
    )
}