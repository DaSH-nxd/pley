import './Home.css';
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

const HomeHeaderNav = () => {
    return (
        <Flex>
            <Breadcrumb className='pley-home-nav' spacing='24px' separator="">
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
            <Spacer/>
            <ButtonGroup className="user-nav" spacing='6'>
                <Link href="signup" color="#ffffff"><Button colorScheme='yellow' size='md' width={'200px'} color='#ffffff'>Sign Up</Button></Link>
                <Link href="login" color="#ffffff"><Button colorScheme='blue' size='md' width={'200px'} color='#ffffff'>Log In</Button></Link>
            </ButtonGroup>
        </Flex>
    )
}

export default HomeHeaderNav;