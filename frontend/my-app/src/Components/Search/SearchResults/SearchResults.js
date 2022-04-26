import React, { useState } from 'react';
import SearchResult  from './SearchResult/SearchResult';
import './SearchResults.css';
import { Button } from '@chakra-ui/react';

export function SearchResults(props) {
    if (!props.businesses || !props.businesses.length) {
        return (<div></div>);
    }

    /** 
    const submitFavorites = () => {
        if (!props.favorites || !props.favorites.length) {

        }
    }
    */
   
    const searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>)

    return (
        <div className = 'search-results'>
            <div className = 'search-results'>
                {searchResults}    
            </div>
            <div className = 'submit-favs'>
                <Button colorScheme='pink'>Save Favorites to your Profile!</Button>
            </div>
        </div>
    )
}

export default SearchResults;