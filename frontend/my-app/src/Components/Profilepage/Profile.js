import React from 'react';
import ProfileHeader from "./ProfileHeader.js";
import EntryContainer from "./EntryContainer.js";
import HomeHeaderNav from '../Homepage/HomeHeaderNav';
import Delete from './DeleteProfile'
import {Divider} from '@chakra-ui/react';

function Profile() {

    return (
        <>
        <HomeHeaderNav></HomeHeaderNav>
        <br/>
        <ProfileHeader/>
        <Divider/>
        <br/>
        <EntryContainer />
        <br/>
        <Delete/>
        </>
    );
}

export default Profile;