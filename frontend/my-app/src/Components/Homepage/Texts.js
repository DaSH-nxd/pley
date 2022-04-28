import './Home.css'
import React from 'react';
import { Text } from '@chakra-ui/react';

const Texts = () => {
    return (
        <div className='homepage-text-container'>
            <Text fontSize={'2xl'} className='homepage-text'>
                Pley connects Berkeley students to local restaurants, bars, dating spots, and even boba hot spots!
            </Text>
        </div>
    )
}

export default Texts;