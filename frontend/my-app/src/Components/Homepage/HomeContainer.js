import './Home.css'
import React from 'react';
import {
    Flex, 
    Image, 
    Stack, 
    HStack, 
    Text, 
    VStack,
    Box} from '@chakra-ui/react';
import Texts from './Texts'
const HomeContainer = () => {
    return (
        <Stack>
            <VStack>
                <HStack className='homepage-container' justify="space-evenly">
                    <Texts/>
                    <div className="homepage-picture-container">
                        <Image className="homepage-picture" src={require('./homepage_pictures/pleyimg_1-removebg.png')} alt='pley img'/>
                    </div>
                </HStack>
                <Text>An Experience Like No Other</Text>
                <HStack>
                    <Box>

                    </Box>
                    <Box>
                        
                    </Box>
                    <Box>
                    
                    </Box>
                </HStack>
                <br/>
            </VStack>
        </Stack>
    )
}

export default HomeContainer;