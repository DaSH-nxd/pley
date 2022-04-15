import './Home.css'
import React from 'react';
import { Text } from '@chakra-ui/react';

const Texts = () => {
    return (
        <div className='homepage-text-container'>
            <Text color={'darkblue'} className='homepage-text'>
                Fill out questions based on your preferences!
            </Text>
            <Text color={'#FFB133'} className='homepage-text'>
                Find the best food and attractions that Berkeley has to offer!
            </Text>
        </div>
    )
}

export default Texts;