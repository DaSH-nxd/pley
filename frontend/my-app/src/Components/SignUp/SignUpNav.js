import './Signup.css';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex
  } from '@chakra-ui/react';
import ColorMode from '../ColorMode/ColorMode';
const SignUpNav = () => {
    return (
        <Flex>
            <Breadcrumb className='pley-signup-nav' spacing='24px' separator="">
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink letterSpacing={'10px'} href='/'>PLEY</BreadcrumbLink>
                    <ColorMode/>
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    )
}

export default SignUpNav;