import '../Homepage/Home.css'
import React, { useState, useEffect } from 'react';
import AuthService from '../../Services/auth-service';
import { Navigate, useNavigate } from "react-router-dom";
import theme from '../../theme/theme';
import ForgotPassword from './ProfileForgetPassword';
import ColorMode from '../ColorMode/ColorMode';
import Delete from './DeleteProfile';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    ButtonGroup,
    ChakraProvider,
    Flex,
    Spacer,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack,
    HStack,
    VStack,
    Box,
    FormLabel,
    Link,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Text,
    Textarea,
    useDisclosure
  } from '@chakra-ui/react';
  import {AddIcon} from '@chakra-ui/icons'

const ProfileHeaderNav = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const navigate = useNavigate();
    const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
    const firstField = React.useRef()
    
    const { isDelete, onDelete, onDel} = useDisclosure();

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
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    {currentUser && (
                        <BreadcrumbItem className='pley-nav-link'>
                        <BreadcrumbLink href='./search'>Search</BreadcrumbLink>
                        </BreadcrumbItem>
                    )}
                </Breadcrumb>
                <Spacer/>
                <ButtonGroup className="user-nav" spacing='6'>
                    <ColorMode/>
                    <Button bg='red' colorScheme='teal' onClick={onToggle}>
                        Profile
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        initialFocusRef={firstField}
                        onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth='1px'>
                            Profile
                        </DrawerHeader>
                        <DrawerBody>
                            <VStack spacing='30px'>
                                <Link >
                                    Settings
                                </Link>
                                <Link><ForgotPassword/></Link>
                                <Link onClick={() => logOut()}>
                                    Sign Out
                                </Link>
                            </VStack>
                        </DrawerBody>
                        <DrawerFooter borderTopWidth='1px' justifyContent={'center'}>
                            <VStack spacing='30px'>
                                <Delete/>
                            </VStack>
                        </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </ButtonGroup>
            </Flex>
        </ChakraProvider>
    )
}

export default ProfileHeaderNav;