import React, {useState, useEffect} from 'react';
import ProfileHeader from "./ProfileHeader.js";
import EntryContainer from "./EntryContainer.js";
import ProfileHeaderNav from './ProfileHeaderNav';
import Delete from './DeleteProfile'
import {Divider} from '@chakra-ui/react';
import AuthService from '../../Services/auth-service.js';
import axios from 'axios';

function Profile() {
    const [data, setData] = useState([]);
    const [isDeleteEntry, setIsDeleteEntry] = useState(true);

    // function on fetching the data that has been favorited
    const getFavoritesData = () => {
        console.log("HSGFHHSDSDS");
        // url on where entry has been favorited;
        const url = "http://localhost:3002/favorites/list";

        const config = {
            headers : {
                "token" : AuthService.getCurrentUser()
            }
        };
        axios
        .get(url, config)
        //  wait for promise to be resolved using .then, set state variable data to returned data
        .then((res) => {
            console.log(res.data.favorites);
            setData(res.data.favorites);
        })
        .catch((error) => console.log(error));
    };

      useEffect(() => {
        getFavoritesData();
      }, [data, isDeleteEntry]);

    const handleClick = () => {
        setIsDeleteEntry(!isDeleteEntry);
    }
    return (
        <>
        <ProfileHeaderNav></ProfileHeaderNav>
        <br/>
        <ProfileHeader/>
        <Divider/>
        <br/>
        <EntryContainer favorites={data} onClick={() => handleClick()}/>
        <br/>
        <Delete/>
        </>
    );
}

export default Profile;