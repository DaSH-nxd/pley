import './Home.css'
import React from 'react';
import {Flex, Image, Img} from '@chakra-ui/react';
import Texts from './Texts'
const HomeBody = () => {
    return (
        <Flex className='homepage-body' justify="space-evenly">
            <Texts/>
            <div className="homepage-picture-container">
                <Image className="homepage-picture" src={require('./homepage_pictures/pleyimg 1.png')} alt='pley img'/>
            </div>
        </Flex>
    )
}

export default HomeBody;