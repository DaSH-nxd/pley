import './Home.css'
import React from 'react';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Button,
    Text, 
    VStack
} from '@chakra-ui/react';
import { HashLink as Link } from 'react-router-hash-link';
const Texts = (href) => {
    return (
        <VStack spacing={'20px'} className='homepage-text-container'>
            <Text fontSize={'2xl'} className='homepage-text'>
                Pley connects Berkeley students to local restaurants, bars, dating spots, and even boba hot spots!
            </Text>
            <AnchorLink href={'#' + href}>Click me</AnchorLink>
        </VStack>
    )
}

export default Texts;