import React from 'react';
import LogIn from './Login';
import Line from './Line';
import { Link } from '@chakra-ui/react';

const LoginContainer = () => {
    return (
        <div className='login-container'>
            <h1 className='login-header'>PLEY</h1>
            <LogIn/>
            <br/>
            <Line/>
            <br/> 
            <a>Forgot Password?</a>
            <br/>
            <p>Don’t have an account? <Link href='./signup'>Sign Up</Link></p>
        </div>
    )
}

export default LoginContainer;