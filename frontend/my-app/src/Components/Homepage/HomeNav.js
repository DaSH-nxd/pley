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
            <Breadcrumb className='pley-home-nav' spacing='8px' separator="">
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink href='#'>About Us</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink href='./contact'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Spacer/>
            <ButtonGroup className="signin-btn" spacing='6'>
                <Button href="signup" colorScheme='yellow' size='xs'>
                    <Link href='./signup'>Sign Up</Link>
                </Button>
                <Button href="login" colorScheme='blue' size='xs'>
                    <Link href='./login'>Log In</Link>
                </Button>
            </ButtonGroup>
        </Flex>
    )
}

export default HomeHeaderNav;