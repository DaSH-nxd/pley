import React, { Fragment } from 'react';
import './SearchResult.css';
import oskiImg from './oski.jpg';
import BusinessRating from './BusinessRating/BusinessRating';

export function SearchResult() {
    return (
        
        <Fragment>
        <div className = 'search-result'>
            <img className = 'business-image' img src = {oskiImg} alt = 'oski'/>
            
            <div className = 'business-desc'>
                <div className = "business-name">
                    <p>Memorial Stadium</p>
                </div>
                <BusinessRating/>
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