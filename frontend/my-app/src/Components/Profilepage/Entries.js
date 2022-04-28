import React, {useState} from 'react';
import "./Profile.css"
import {Button, Heading, Stack, HStack, VStack, Text} from '@chakra-ui/react'

const Entries = ({title, number, address, passToButton}) => {
    // title, number, address
    // once user favorites an entry, create new entry with info

    const removeEntry = () => {
        passToButton();
    }

    return (
        <HStack>
            <VStack align={"center"} classname="entry-events">
                <Text fontSize={'5xl'}>{title}</Text>
                <Text>{number}</Text>
                <Text>{address}</Text>
            </VStack>
            <Button onClick={removeEntry}>x</Button>
        </HStack>
    )
}

export default Entries;