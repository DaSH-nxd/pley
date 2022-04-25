import React, { useState, Fragment } from 'react';
import './SearchResult.css';
import BusinessRating from './BusinessRating/BusinessRating';
import Favorite from './Favorite/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';


function SearchResult(props) {

    const [isFavorite, setFavorite] = useState(false);

    if (!props.business) {
        return (<div></div>);
    }

    function renderStar() {
        const icon = isFavorite ? fasStar : farStar;
        return (
        <Favorite 
        fav = {icon}
        onClick = {() => handleClick()}
        />
        );
    }
    
    function handleClick() {
        //Maybe keep track of favorites in array/map to store in backend afterwards?
        setFavorite(!isFavorite);
    }

    const b = props.business;
    const addressLines = b.location.display_address.map(addressLine => <p key = {b.id + addressLine}>{addressLine}</p>);

    return (
        
        <Fragment>
        <div className = 'search-result'>
            <img className = 'business-image' 
                img src = {b.image_url} 
                alt = 'oski'
            />
            
            <div className = 'business-desc'>
                <div className = "business-name">
                    {b.name}
                </div>
                <div className = 'fav-tag'>
                    { renderStar() }
                </div>
                <BusinessRating rating = { b.rating }/>
                <div>
                { b.price }
                </div>
            </div> 

            <div className = 'business-add-contact'>
                <div>
                    <p>{b.phone}</p>
                </div>
                <div>
                    {addressLines}
                </div>
                
            </div>
        </div>
        </Fragment>
    )
}

export default SearchResult;