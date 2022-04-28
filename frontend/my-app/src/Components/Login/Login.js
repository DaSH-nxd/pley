import React, { useState } from 'react';
import {
    Button, 
    VStack,
    FormControl,
    FormHelperText,
    Input,
    InputGroup,
} from "@chakra-ui/react"
import { EmailIcon } from '@chakra-ui/icons';
import './LogIn.css';
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from "../../Services/auth-service";


const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    
    const handleSubmit = async () => {
        try {
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
    }

    return (
        <VStack spacing={'36px'} >
            <FormControl w={'400px'} onSubmit={handleSubmit}>
                <InputGroup>
                    <Input 
                    id='username'
                    type='text' 
                    placeholder='Enter username'
                    value={username}
                    border={'2px solid black'}
                    boxShadow={'0 0 3px'}
                    onChange = {(d) => 
                    setUsername(d.target.value)
                    }/>
                </InputGroup>
                <FormHelperText marginTop={'15px'}>Enter your username</FormHelperText>
            </FormControl>

            <FormControl  className='login-form' onSubmit={handleSubmit}>
                <InputGroup>
                    <Input 
                        id='password'
                        type='password' 
                        placeholder='Password'
                        border={'2px solid black'}
                        boxShadow={'0 0 3px'}
                        value={password}
                        onChange = {(d) => 
                        setPassword(d.target.value)
                        }/>
                    </InputGroup>
                <FormHelperText>Enter your password</FormHelperText>
            </FormControl>
            <Button onClick = {() => handleSubmit()} color='white' bg='lightblue' colorScheme={'lightblue'} className='login-button'  width={''} block size ="sm" type="submit" >
                Login
            </Button>
        </VStack>
    );
}

export default LogIn;
