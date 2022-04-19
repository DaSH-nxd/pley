import React from 'react';
import HomeHeaderNav from './HomeNav';
import HomeContainer from './HomeContainer';
import { ChakraProvider } from '@chakra-ui/react'
import './Home.css';

const Homepage = () => {
    return (
        <div>
            <ChakraProvider>
                <HomeHeaderNav/>
                <h1 className='homepage-header'><b>PLEY</b></h1>
                <HomeContainer/>
            </ChakraProvider>
        </div>
    )
}

export default Homepage;