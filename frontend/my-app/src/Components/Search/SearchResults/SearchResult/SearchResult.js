import React, { useState, Fragment } from 'react';
import './SearchResult.css';
import BusinessRating from './BusinessRating/BusinessRating';
import Favorite from './Favorite/Favorite';
import { Button, IconButton } from '@chakra-ui/react';
import axios from 'axios';
import authHeader from "./../../../../Services/auth-header.js";


function SearchResult(props) {

    const [disable, setDisable] = useState(false);
    if (!props.business) {
        return (<div></div>);
    }

    function DisableAndSend() {

        return (
            <Button 
            colorScheme = 'teal'
            variant='solid'
            size = 'xs'
            isDisabled={disable}
            onClick = {() => handleClick()}
            >Favorite</Button>
        )}
    

    
    function handleClick() {
        //name, phonenumber, address
        setDisable(true);
        const b = props.business;
        const data = {
            "name": b.name,
            "phone_number": b.number,
            "address": b.location.display_address
        }
        console.log(data);
        axios
            .post("http://localhost:3002/favorites/add",
            authHeader().token,
            data
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
                    { DisableAndSend() }
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