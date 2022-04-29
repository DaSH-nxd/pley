import React, { useRef, useState, useEffect } from 'react';
import {
    Button, 
    ChakraProvider,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    InputGroup,
    ListItem,
    UnorderedList,
    InputLeftElement,
    VStack
} from "@chakra-ui/react"
import theme from '../../theme/theme';
import './Signup.css';
import { EmailIcon, Icon, createIcon } from '@chakra-ui/icons';
import axios from 'axios';
import AuthService from "../../Services/auth-service";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {

    const [username, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
        
        <VStack> 
            <FormControl className='signup-form'>
                <FormLabel htmlFor='username'>Username:</FormLabel>
                <InputGroup>
                <InputLeftElement pointerEvents='none' children={
                <Icon marginTop={'9px'} marginLeft={'5px'} boxSize={5}>
                    <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4a4 4 0 11-8 0 4 4 0 018 0zm3.687 8.12c.206.322.315.697.313 1.08V16H0v-2.8a1.99 1.99 0 011.163-1.818A16.654 16.654 0 018 10a16.654 16.654 0 016.837 1.382c.348.159.643.415.85.737z"
                    clipRule="evenodd"
                    />
                </Icon>}/>
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
                <InputLeftElement pointerEvents='none' children={<EmailIcon/>}/>
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
            <FormControl className='signup-form' mt={'30px'}>
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
                <section> 
                    <b><p className='errmsg'>{errmsg}</p></b>
                </section>
            </FormControl>
            <Button className='signup-button' width={''} block size ="sm" type="submit" colorScheme={'blue'} onClick={() => registerUser()}>
                Create Account
            </Button>
        </VStack>
    );
}

export default SignUp;
