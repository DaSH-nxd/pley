import React, { useState, Fragment } from 'react';
import './SearchResult.css';
import BusinessRating from './BusinessRating/BusinessRating';
import Favorite from './Favorite/Favorite';
import { Button, IconButton } from '@chakra-ui/react';
import { farStar as farStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import authHeader from "./../../../../Services/auth-header.js";

//TODO:set/unset favorites

function SearchResult(props) {

    //const [isFavorite, setFavorite] = useState(false);

    if (!props.business) {
        return (<div></div>);
    }

    /**
     * <Button 
        colorScheme = 'teal'
        variant='solid'
        onClick = {() => handleClick()}
        >Favorite</Button>
     */

    /**
     * 
     *  <IconButton
        aria-label='Favorite'
        colorScheme = 'teal'
        variant='solid'
        icon={<farStar />}
        onClick = {() => handleClick()}
        />
        );z
     */
    
    function renderStar() {
        //const icon = isFavorite ? fasStar : farStar;
        return (
            <Button 
            colorScheme = 'teal'
            variant='solid'
            size = 'xs'
            onClick = {() => handleClick()}
            >Favorite</Button>
        )}
    

    
    function handleClick() {
        //name, phonenumber, address
        const b = props.business;
        const data = {
            "name": b.name,
            "number": b.number,
            "address": b.location.display_address
        }
        console.log(data);
        axios
            .post("http://localhost:4000/favorites/add",
            authHeader()
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
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