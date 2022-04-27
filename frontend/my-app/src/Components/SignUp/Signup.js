import React, { useState, useEffect } from 'react';
import {
    Button, 
    ChakraProvider,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    ListItem,
    UnorderedList
} from "@chakra-ui/react"
import './Signup.css';
import axios from 'axios';
import AuthService from "../../Services/auth-service";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");
    const [username, setuserName] = useState("");

    const [msg, setMsg] = useState("");

    /** 
    const registerUser = () => {
        console.log({
            username,
            email,
            password
        })
        const data = {
            "username": username,
            "email": email,
            "password": password
        };
        const url = "http://localhost:4000/user/signup"

        axios
        .post(url, data)
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)})
    }
    */

    const navigate = useNavigate();

    const registerUser = async () => {
        // e.preventDefault();
        console.log("button clicked");
        try {
            await AuthService.signup(username, email, password).then(
                (res) => {
                    navigate("/login");
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            )
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ChakraProvider>
            <FormControl className='signup-form'>
                <FormLabel htmlFor='username'>Username:</FormLabel>
                <InputGroup>
                    <Input 
                    id='username'
                    type='username' 
                    placeholder='Enter your username.'
                    value={username}
                    onChange = {(d) => 
                    setuserName(d.target.value)
                    }/>
                </InputGroup>
            </FormControl>       
            <FormControl className='signup-form'>
                <FormLabel htmlFor='email'>Email address:</FormLabel>
                <InputGroup>
                    <Input 
                    id='email'
                    type='email' 
                    placeholder='Enter Email'
                    value={email}
                    onChange = {d => 
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
            <FormControl className='signup-form' mt={'20px'}>
                <InputGroup>
                    <Input 
                        id='password'
                        type='password' 
                        placeholder='Password'
                        value={password}
                        onChange = {d => 
                        setPassword(d.target.value)
                        }/>
                </InputGroup>
            </FormControl>
            console.log(username + " " + email + " " + password);
            <Button className='signup-button' width={''} block size ="sm" type="submit" colorScheme={'blue'} onClick={() => registerUser()}>
                Create Account
            </Button>
        </ChakraProvider>
    );
}

export default SignUp;
