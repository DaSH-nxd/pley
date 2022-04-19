import './LogIn.css';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    ButtonGroup,
    Flex,
    Link,
    Spacer
  } from '@chakra-ui/react';

const LoginNav = () => {
    return (
        <Flex>
            <Breadcrumb className='pley-login-nav' spacing='24px' separator="">
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink href='./contact'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink href='./search'>Search</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    )
}

export default LoginNav;