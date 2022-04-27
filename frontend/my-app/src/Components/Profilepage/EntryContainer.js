import './Profile.css';
import React, {useState, useEffect} from 'react';
import Entries from './Entries.js'
import {HStack, VStack} from '@chakra-ui/react';
import axios from 'axios'

const EntryContainer = () => {

    const [data, setData] = useState([]);

    // url on where entry has been favorited;
    const url = "http://localhost:4000/favorites"

    // function on fetching the data that has been favorited
    const getFavoritesData = () => {
        axios
        .get(url, data)
        //  wait for promise to be resolved using .then, set state variable data to returned data
        .then((data) => setData(data.data))
        .catch((error) => console.log(error));
      };
      useEffect(() => {
        getFavoritesData();
      }, );


    return (
        <VStack className='entry-container'>
            {
                data.map(d => 
                <Entries title={d.title} number={d.number} address={d.address} />
                )
            }
        </VStack>
    )
}
export default EntryContainer;