import React from 'react';
import { Avatar, AvatarBadge, Wrap } from '@chakra-ui/react';
import './Profile.css';

const Blurb = () => {
    return <div>
        <div className='blurb-container'>
        <Avatar name = 'Oski Cal' src={require('./oski.jpg')} />
        <div className = 'user-name'>
            <p>Oski Cal</p> 
        </div>
        <div className = 'user-description'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>

    </div>
}

export default Blurb;