import './Home.css'
import React from 'react';
import {Flex, Image, Img} from '@chakra-ui/react';
import Texts from './Texts'
const HomeContainer = () => {
    return (
        <Flex className='homepage-container' justify="space-evenly">
            <Texts/>
            <div className="homepage-picture-container">
                <Image className="homepage-picture" src={require('./homepage_pictures/pleyimg_1-removebg.png')} alt='pley img'/>
            </div>
        </Flex>
    )
}

export default HomeContainer;