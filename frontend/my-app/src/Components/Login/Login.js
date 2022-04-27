import React, { useState } from 'react';
import {
    Button, 
    ChakraProvider,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    InputGroup,
    InputLeftElement
} from "@chakra-ui/react"
import { EmailIcon } from '@chakra-ui/icons';
import './LogIn.css';
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from "../../Services/auth-service";
//import { calcRelativeAxisPosition } from 'framer-motion/types/projection/geometry/delta-calc';
import axios from 'axios';

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    
    const handleSubmit = async () => {
        // e.preventDefault();
        console.log("button clicked");
        try {
            /**
             * await AuthService.login(username, password).then(
                async () => {
             */
            await AuthService.login(username, password).then(
                () => {
                    //navigate to homepage after login
                    navigate("/");
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch(error) {
            console.log(error);
        }
        /*
        const data = {
            
            username: username,
            password: password
        }
        
        axios
            .post('http://localhost:3000/login', data)
            .then((response) => {
                const users = response.data
                    dispatch.

            })
            */
    }

    return (
        <ChakraProvider>
            <FormControl className='login-form' onSubmit={handleSubmit}>
                {/* <FormLabel htmlFor='email'>Email address</FormLabel> */}
                <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<EmailIcon/>}/>
                    <Input 
                    id='username'
                    type='username' 
                    placeholder='Enter username'
                    value={username}
                    onChange = {(d) => 
                    setUsername(d.target.value)
                    }/>
                </InputGroup>
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
    
            <FormControl className='login-form' onSubmit={handleSubmit}>
                {/* <FormLabel htmlFor='password'>Password</FormLabel> */}
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
                <FormHelperText>Nor your password.</FormHelperText>
            </FormControl>
            <Button onClick = {() => handleSubmit()} className='login-button' width={''} block size ="sm" type="submit" disabled={!validateForm()}>
                Login
            </Button>
        </ChakraProvider>
    );
}

export default LogIn;
