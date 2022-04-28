import React, { useRef, useState, useEffect } from 'react';
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

    const [username, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verify, setVerify] = useState("");
    const [errmsg, seterrMsg] = useState("");

    const navigate = useNavigate();


    const registerUser = async () => {
        // e.preventDefault();
        console.log("button clicked");
        try {
            await AuthService.signup(username, email, password).then(
                (res) => {
                    navigate("/login");
                    window.location.reload();
                } 
            )
        } catch (error) {
            console.log(error)
            if (error.response.data.errors) {
                seterrMsg('Missing Username, Email, or Password');
            } else if (error.response.data.msg === 'User Already Exists') {
                seterrMsg('User Already Exists')
            } else {
                seterrMsg('No Server Response')
            }
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
                    autoComplete="off"
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
                    autoComplete='off'
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
                        autoComplete='off'
                        value={password}
                        onChange = {d => 
                        setPassword(d.target.value)
                        }/>
                </InputGroup>
            </FormControl>
            <FormControl className='signup-form' mt={'-20px'}>
                <InputGroup>
                    <Input 
                        id='verify'
                        type='password' 
                        placeholder='Verify password'
                        autoComplete='off'
                        value={verify}
                        onChange = {d => 
                        setVerify(d.target.value)
                        }/>
                </InputGroup>
                <br/>
                <section> 
                    <p className='errmsg'>{errmsg}</p>
                </section>
            </FormControl>
            <Button className='signup-button' width={''} block size ="sm" type="submit" colorScheme={'blue'} onClick={() => registerUser()}>
                Create Account
            </Button>
        </ChakraProvider>
    );
}

export default SignUp;
