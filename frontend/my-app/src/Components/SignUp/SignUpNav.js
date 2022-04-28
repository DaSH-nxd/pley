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
            <Breadcrumb className='pley-signup-nav' spacing='24px' separator="">
                <BreadcrumbItem className='pley-nav-link'>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>

                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    )
}

export default SignUpNav;