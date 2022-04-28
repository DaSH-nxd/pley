import './Home.css'
import React from 'react';
import { Text } from '@chakra-ui/react';

const Texts = () => {
    return (
        <div className='homepage-text-container'>
            <Text fontSize={'3xl'} className='homepage-text'>
                Pley connects 
            </Text>
        </div>
    )
}

export default Texts;