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
                We connect Berkeley locals to restaurants, bars, boba hot spots, and more in the city.
            </Text>
        </VStack>
    )
}

export default Texts;