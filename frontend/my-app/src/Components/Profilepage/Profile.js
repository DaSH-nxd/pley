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

    // url on where entry has been favorited;
    const base_url = "http://localhost:3002/favorites";

    const config = {
        headers : {
            "token" : AuthService.getCurrentUser()
        }
    };

    // function on fetching the data that has been favorited
    const getFavoritesData = () => {
        // console.log("HSGFHHSDSDS");
        axios
        .get(`${base_url}/list`, config)
        //  wait for promise to be resolved using .then, set state variable data to returned data
        .then((res) => {
            // console.log(res.data.favorites);
            setData(res.data.favorites);
        })
        .catch((error) => console.log(error));
    };

      useEffect(() => {
        getFavoritesData();
      }, [data, isDeleteEntry]);

    const handleDeleteEntryClick = (name, phone_number, address) => {
        console.log(name);
        console.log(phone_number);
        console.log(address);
        const options = {
            headers: {
                "token" : AuthService.getCurrentUser()
            },
            data : {
                "name": name,
                "phone_number": phone_number,
                "address": address
            }
        }
        /*
        const data = {
            data : {
                "name": name,
                "phone_number": phone_number,
                "address": address
            }
        };
        */
        axios
        .delete(`${base_url}/delete`, options)
        .then((res) => {
            console.log(res.data);
            setData(res.data.favorites);
        })
        .catch((error) => console.log("error with axios delete one fav"));
    }

    const handleDeleteAllFavsClick = () => {
        const options = {
            headers: {
                "token" : AuthService.getCurrentUser()
            }
        }
        axios
        .delete(`${base_url}/deleteall`, options)
        .then((res) => {
            setData(res.data.favorites);
        })
        .catch((error) => console.log("error with axios delete all favs"));
    }

    return (
        <>
        <ProfileHeaderNav></ProfileHeaderNav>
        <br/>
        <ProfileHeader/>
        <Divider/>
        <br/>
        <EntryContainer favorites={data} onDeleteEntryClick={handleDeleteEntryClick} onDeleteAccClick={handleDeleteAllFavsClick}/>
        <br/>
        </>
    );
}

export default Profile;