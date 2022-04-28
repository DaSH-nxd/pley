import React from 'react';
import HomeHeaderNav from './HomeHeaderNav';
import HomeContainer from './HomeContainer';
import { ChakraProvider, Text } from '@chakra-ui/react'
import './Home.css';

const Homepage = () => {
    return (
        <div>
            <ChakraProvider>
                <HomeHeaderNav/>
                <Text letterSpacing={'10px'} className='homepage-header'><b>PLEY</b></Text>
                <HomeContainer/>
            </ChakraProvider>
        </div>
    )
}

export default Homepage;