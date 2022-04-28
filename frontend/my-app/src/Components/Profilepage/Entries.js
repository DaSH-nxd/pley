import React, {useState} from 'react';
import "./Profile.css"
import {Button, Heading, Stack, HStack, VStack, Text} from '@chakra-ui/react'

const Entries = ({name, phone_number, address, passToButton}) => {
    // title, number, address
    // once user favorites an entry, create new entry with info
    console.log("HJESHDBSBFSBHFBSFD");
    return (
        <HStack>
            <VStack  wordBreak={'break-word'}>
                <b><Text width={'300px'} wordBreak={'break-word'} fontSize={'2xl'}>{name}</Text></b>
                <Text width={'300px'}>{phone_number}</Text>
                <Text width={'300px'}>{address}</Text>
            </VStack>
            console.log("before button press");
            <Button background={'lightred'} onClick={() => passToButton()}>x</Button>
        </HStack>
    )
}

export default Entries;