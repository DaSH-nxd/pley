import React from 'react';
import { SearchResult } from './SearchResult/SearchResult';
import './SearchResults.css';

export function SearchResults() {
    return (
        <div className = 'search-results'>
            <SearchResult/>
            <SearchResult/>
            <SearchResult/>
            <SearchResult/>
        </div>
    )
}

export default SearchResults;