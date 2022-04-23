import React from 'react';
import Blurb from "./Blurb.js";
import History from "./History.js";
import HomeHeaderNav from '../Homepage/HomeHeaderNav';

function Profile() {

    return (
        <>
        <HomeHeaderNav></HomeHeaderNav>
        <Blurb />
        <History />
        </>
    );
}

export default Profile;