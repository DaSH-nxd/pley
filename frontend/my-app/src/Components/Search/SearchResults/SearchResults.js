import React, { useState } from 'react';
import SearchResult  from './SearchResult/SearchResult';
import './SearchResults.css';

export function SearchResults(props) {
    if (!props.businesses || !props.businesses.length) {
        return (<div></div>);
    }

    const searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>)

    return (
        <div className = 'search-results'>
            <div className = 'search-results'>
                {searchResults}    
            </div>
        </div>
    )
}

export default SearchResults;