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

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <ChakraProvider>
            <FormControl className='login-form' onSubmit={handleSubmit}>
                {/* <FormLabel htmlFor='email'>Email address</FormLabel> */}
                <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<EmailIcon/>}/>
                    <Input 
                    id='email'
                    type='email' 
                    placeholder='Enter Email'
                    value={email}
                    onChange = {(d) => 
                    setEmail(d.target.value)
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
            <Button className='login-button' width={''} block size ="sm" type="submit" disabled={!validateForm()}>
                Login
            </Button>
        </ChakraProvider>
    );
}

export default LogIn;
