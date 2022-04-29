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
import ColorMode from '../ColorMode/ColorMode';

const LoginNav = () => {
    return (
        <Flex>
            <Breadcrumb className='pley-login-nav' spacing='24px' separator="">
                <BreadcrumbItem letterSpacing={'10px'} className='pley-nav-link'>
                    <BreadcrumbLink href='/'>PLEY</BreadcrumbLink>
                    <ColorMode/>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    )
}

export default LoginNav;