import React, { useState, Fragment } from 'react';
import './SearchResult.css';
import oskiImg from './oski.jpg';
import BusinessRating from './BusinessRating/BusinessRating';
import BusinessImage from './BusinessImage/BusinessImage';
import Favorite from './Favorite/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';


function SearchResult() {

    const [isFavorite, setFavorite] = useState(false);

    function renderStar() {
        let icon = isFavorite ? fasStar : farStar;

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

    return (
        
        <Fragment>
        <div className = 'search-result'>
            <BusinessImage
                imgb = {oskiImg}
                favorite = {farStar}
            />
            
            <div className = 'business-desc'>
                <div className = "business-name">
                    <p>Memorial Stadium</p>
                </div>
                <div className = 'fav-tag'>
                    { renderStar() }
                </div>
                <BusinessRating rating = {3.5}/>
                <p>$$$</p>
            </div> 

            <div className = 'business-address'>
                <p>+17149559933</p>
                <p>2115 Bancroft Way</p>
                <p>94704</p>
            </div>
        </div>
        </Fragment>
    )
}

export default SearchResult;