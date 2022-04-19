import React from 'react';
import LoginContainer from './LoginContainer';
import './LogIn.css';
import LoginNav from './LoginNav';

const LoginPage = () => {
    return (
        <div className='login-page'>
            <LoginNav/>
            <LoginContainer/>
        </div>
    )
}

export default LoginPage;