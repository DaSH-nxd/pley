import './Home.css'
import React from 'react';
import {
    Flex, 
    Image, 
    Stack, 
    HStack, 
    Text, 
    VStack,
    Box,
    Heading
} from '@chakra-ui/react';
import Texts from './Texts'
const HomeContainer = () => {
    return (
        <Stack>
            <VStack>
                <HStack className='homepage-container' justify="space-evenly">
                    <Texts href="homepage-header-2"/>
                    <div className="homepage-picture-container">
                        <Image className="homepage-picture" src={require('./homepage_pictures/pleyimg_1-removebg.png')} alt='pley img'/>
                    </div>
                </HStack>
                <Stack >
                    <h1 id='homepage-header-2' className='homepage-header-2'>Yelp Tailored for Gen Z</h1>
                    <br/>
                    <HStack spacing={'50px'}>
                        <Box border={'3px solid'} maxW='sm' p='5' borderWidth='1px' rounded='md'>
                            <Text fontSize={'30px'}>Step 1:</Text>
                            <Text>
                            Register an account or/and log in to save your favorite venues.
                            </Text>
                        </Box>
                        <Box border={'3px solid'} maxW='sm' p='5' borderWidth='1px' rounded='md'>
                            <Text fontSize={'30px'}>Step 2:</Text>
                            <Text>
                            Search for businesses around Berkeley using the Search page.
                            </Text>
                        </Box>
                        <Box border={'3px solid'} maxW='sm' p='5' borderWidth='1px' rounded='md'>
                            <Text fontSize={'30px'}>Step 3:</Text>
                            <Text>
                            Save your favorite search results into your personal profile for safe keeping.
                            </Text>
                        </Box>
                    </HStack>
                </Stack>
                <br/>
                <br/>
                <br/>
                <br/>
            </VStack>
        </Stack>
    )
}

export default HomeContainer;