import React from 'react';
import LogIn from './Login';
import Line from './Line';
import ForgotPassword from './ForgotPassword';
import { Link } from '@chakra-ui/react';
// import './LogIn.css';

const LoginContainer = () => {
    return (
        <div className='login-container'>
            <h1 className='login-header'><b>PLEY</b></h1>
            <br/>
            <br/>
            <LogIn/>
            <br/>
            <Line/>
            <br/> 
            <Link><ForgotPassword/></Link>
            <br/>
            <p>Don’t have an account? <Link color="blue" href='./signup'>Sign Up</Link></p>
        </div>
    )
}

export default LoginContainer;