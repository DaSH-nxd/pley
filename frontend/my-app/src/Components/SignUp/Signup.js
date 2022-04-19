import React, { useState } from 'react';
import {
    Button, 
    ChakraProvider,
    Fade,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    ListItem,
    UnorderedList
} from "@chakra-ui/react"
import './Signup.css';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function validatePassword() {
        if (password === verify) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <ChakraProvider>
            <FormControl className='signup-form' onSubmit={handleSubmit}>
                <FormLabel htmlFor='first-name'>First Name:</FormLabel>
                <InputGroup>
                    <Input 
                    id='firstName'
                    type='firstName' 
                    placeholder='Enter your first name.'
                    value={firstName}
                    onChange = {(d) => 
                    setFirstName(d.target.value)
                    }/>
                </InputGroup>
            </FormControl>       
            <FormControl className='signup-form' onSubmit={handleSubmit}>
                <FormLabel htmlFor='last-name'>Last Name:</FormLabel>
                <InputGroup>
                    <Input 
                    id='lastName'
                    type='lastName' 
                    placeholder='Enter your last name.'
                    value={lastName}
                    onChange = {(d) => 
                    setLastName(d.target.value)
                    }/>
                </InputGroup>
            </FormControl>        
            <FormControl className='signup-form' onSubmit={handleSubmit}>
                <FormLabel htmlFor='email'>Enter your email:</FormLabel>
                <InputGroup>
                    <Input 
                    id='email'
                    type='email' 
                    placeholder='Enter Email'
                    value={email}
                    onChange = {(d) => 
                    setEmail(d.target.value)
                    }/>
                </InputGroup>
            </FormControl>
            <UnorderedList className='signup-password-rules'>
                <ListItem>At least 6 characters with no space</ListItem>
                <ListItem>At Least 1 Uppercase Letter</ListItem>
                <ListItem>At least 1 number</ListItem>
                <ListItem>At least 1 of the following special characters from !#$^*</ListItem>
            </UnorderedList>
            <FormControl className='signup-form' onSubmit={handleSubmit} mt={'20px'}>
                <InputGroup>
                    <Input 
                        id='password'
                        type='password' 
                        placeholder='Password'
                        value={password}
                        onChange = {(d) => 
                        setPassword(d.target.value)
                        }/>
                </InputGroup>
            </FormControl>
            <FormControl className='signup-form' onSubmit={handleSubmit} mt={'-40px'} >
                <FormLabel htmlFor='email'>Verify your password:</FormLabel>
                <InputGroup>
                    <Input 
                        id='password'
                        type='password' 
                        placeholder='Password'
                        value={verify}
                        onChange = {(d) => 
                        setVerify(d.target.value)
                        }/>
                </InputGroup>
            </FormControl>
            <Button className='signup-button' width={''} block size ="sm" type="submit" colorScheme={'blue'} disabled={!validateForm()}>
                Create Account
            </Button>
        </ChakraProvider>
    );
}

export default SignUp;
