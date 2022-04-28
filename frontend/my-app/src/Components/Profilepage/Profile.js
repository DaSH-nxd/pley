import React from 'react';
import ProfileHeader from "./ProfileHeader.js";
import EntryContainer from "./EntryContainer.js";
import ProfileHeaderNav from './ProfileHeaderNav';
import Delete from './DeleteProfile'
import {Divider} from '@chakra-ui/react';

function Profile() {

    return (
        <>
        <ProfileHeaderNav></ProfileHeaderNav>
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