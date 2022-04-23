import React from 'react';
import './Favorite.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

function Favorite(props) {
    return (

        <div>
            <FontAwesomeIcon
            icon={props.fav}
            size = {"2xl"}
            style={props.color}
            onClick = {props.onClick}
            />
        </div>
    )
}

export default Favorite;