import React, { useState, Fragment } from 'react';
import './SearchResult.css';
import BusinessRating from './BusinessRating/BusinessRating';
import Favorite from './Favorite/Favorite';
import { Button, IconButton } from '@chakra-ui/react';
import axios from 'axios';
import authService from "./../../../../Services/auth-service";
import Profile from '../../../Profilepage/Profile';


function SearchResult(props) {

    const [disable, setDisable] = useState(false);
    if (!props.business) {
        return (<div></div>);
    }

    function DisableAndSend() {

        return (
            <Button 
            colorScheme = 'blue'
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

        const bodyParameters = {
            place: {
                "name": b.name,
                "phone_number": b.phone,
                "address": b.location.display_address,
            }
        };
        const config = {
            headers : {
                "token" : authService.getCurrentUser()
            }
        };


        console.log(bodyParameters);
        console.log(authService.getCurrentUser());

        axios
            .post("http://localhost:3002/favorites/add",
            bodyParameters,
            config)
            .then((res) => console.log(res))
            .catch((err) => console.log("elo govna"));
        
        // Profile.getFavoritesData();
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