import './Profile.css';
import React, {useState, useEffect} from 'react';
import Entries from './Entries.js'
import {Button, HStack, VStack} from '@chakra-ui/react';

const EntryContainer = (props) => {
    return (
        <VStack className='entry-container'>
            {
                props.favorites?.map(d => 
                <Entries name={d.name} phone_number={d.phone_number} address={d.address} passToButton={props.onClick}/>
                )
            }
            <Button bg='red' colorScheme='red'>
                Delete Favorites
            </Button>
        </VStack>
    )
}

export default EntryContainer;