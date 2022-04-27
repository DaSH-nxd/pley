import React from 'react';
import ProfileHeader from "./ProfileHeader.js";
import EntryContainer from "./EntryContainer.js";
import HomeHeaderNav from '../Homepage/HomeHeaderNav';
import Delete from './DeleteProfile'

function Profile() {

    return (
        <>
        <HomeHeaderNav></HomeHeaderNav>
        <ProfileHeader/>
        <EntryContainer />
        <br/>
        <Delete/>
        </>
    );
}

export default Profile;