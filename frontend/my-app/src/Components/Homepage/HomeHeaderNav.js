import './Home.css';
import React, { useState, useEffect } from 'react';
import AuthService from '../../Services/auth-service';
import { Navigate, useNavigate } from "react-router-dom";
import theme from '../../theme/theme';
import ColorMode from '../ColorMode/ColorMode';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    ButtonGroup,
    Flex,
    Link,
    Spacer,
    ChakraProvider
  } from '@chakra-ui/react';

const HomeHeaderNav = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        console.log(user);
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
        console.log(AuthService.getCurrentUser());
        navigate("/");
        window.location.reload();
    };

    return (
        <ChakraProvider theme={theme}>
            <Flex>
                <Breadcrumb className='pley-home-nav' spacing='24px' separator="">
                    <BreadcrumbItem className='pley-nav-link'>
                        <BreadcrumbLink href='/'>PLEY</BreadcrumbLink>
                    </BreadcrumbItem>
                    {currentUser && (
                        <BreadcrumbItem className='pley-nav-link'>
                        <BreadcrumbLink href='./search'>Search</BreadcrumbLink>
                        </BreadcrumbItem>
                    )}
                </Breadcrumb>
                <Spacer/>
                {currentUser ? (
                    
                    <ButtonGroup className="user-nav" spacing='6'>
                    <ColorMode/>
                    <Link href="profile" color="#ffffff"><Button bg='red' _hover={'red'} colorScheme='red' size='md' color='#ffffff'>Profile</Button></Link>
                    </ButtonGroup>
                    
                ) : (
                    <ButtonGroup className="user-nav" spacing='6'>
                    <ColorMode/>
                    <Link href="login" color="#ffffff"><Button colorScheme='darkblue' bg='darkblue' size='md' width={'200px'} color='#ffffff'>Log In</Button></Link>
                    </ButtonGroup>
                )}
            </Flex>
        </ChakraProvider>
    )
}

export default HomeHeaderNav;