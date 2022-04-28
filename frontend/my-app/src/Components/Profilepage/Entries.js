import React, {useState} from 'react';
import "./Profile.css"
import {Button, Heading, Stack, HStack, VStack, Text} from '@chakra-ui/react'

const Entries = ({title, number, address, passToButton}) => {
    // title, number, address
    // once user favorites an entry, create new entry with info

    const removeEntry = () => {
<<<<<<< HEAD
        passToButton();
=======
        
>>>>>>> 4c2c2cd1e096cd430c0a49dcb93a32ce3b4c18ef
    }

    return (
        <HStack>
            <VStack  wordBreak={'break-word'}>
                <b><Text width={'300px'} wordBreak={'break-word'} fontSize={'2xl'}>{title}</Text></b>
                <Text width={'300px'}>{number}</Text>
                <Text width={'300px'}>{address}</Text>
            </VStack>
            <Button background={'lightred'} onClick={removeEntry}>x</Button>
        </HStack>
    )
}

export default Entries;