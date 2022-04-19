import React from 'react';
import SignUpContainer from './SignupContainer';
import SignUpNav from './SignUpNav';
import './Signup.css';

const SignUpPage = () => {
    return (
        <div className='login-page'>
            <SignUpNav/>
            <SignUpContainer/>
        </div>
    )
}

export default SignUpPage;