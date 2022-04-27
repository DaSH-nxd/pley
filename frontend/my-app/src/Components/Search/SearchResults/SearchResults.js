import React, { useState } from 'react';
import SearchResult  from './SearchResult/SearchResult';
import './SearchResults.css';
import { Text } from '@chakra-ui/react';

export function SearchResults(props) {
    if (!props.businesses || !props.businesses.length) {
        return (<div>
            <div className = 'no-results'>
                <Text fontSize='xl'>No Results! Try Broadening your Search Filters!</Text>
            </div>
        </div>);
    }

    /** 
    const submitFavorites = () => {
        if (!props.favorites || !props.favorites.length) {

        }
    }
    */

    const searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b} favorites={props.favorites} setFavs={props.setFavs} />)

    return (
        <div className = 'search-results'>
            <div className = 'search-results'>
                {searchResults}
            </div>
        </div>
    )
}

export default SearchResults;