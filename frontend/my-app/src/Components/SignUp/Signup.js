import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
    <div className="SignUp">
        <Form onSubmit={handleSubmit}>
            <Form.Group size = "lg" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    autofocus
                    type = "firstName"
                    value = {firstName}
                    onChange = {(d) => setFirstName(d.target.value)}
                    />
            </Form.Group>
            <Form.Group size = "lg" controlId="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type = "lastName"
                    value = {lastName}
                    onChange = {(d) => setLastName(d.target.value)}
                    />
            </Form.Group>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type = "email"
                    value = {email}
                    onChange = {(d) => setEmail(d.target.value)}
                    />
            </Form.Group>
            <Form.Group size = "lg" controlId = "password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type = "password"
                    value = {password}
                    onChange = {(d) => setPassword(d.target.value)}
                    />
            </Form.Group>
            <Button block size ="lg" type="submit" disabled={!validateForm()}>
                Sign Up
            </Button>
        </Form>
    </div>
    );
}

export default SignUp;
