import './Signup.css';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex
  } from '@chakra-ui/react';

const SignUpNav = () => {
    return (
        <Flex>
            <Breadcrumb className='pley-signup-nav' spacing='8px' separator="">
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink href='/about'>About Us</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink href='./contact'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    )
}

export default SignUpNav;