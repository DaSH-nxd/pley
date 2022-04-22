import React from 'react';
import './BusinessRating.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';


export function BusinessRating() {
    return (
        <div className ='rating'>
            <Rating 
                emptySymbol={
                    <FontAwesomeIcon
                    icon={farStar}
                    className='mx-2'
                    style={{color: '#C0C0C0'}}
                    />
                }
                fullSymbol={
                    <FontAwesomeIcon
                    icon={fasStar}
                    className='mx-2'
                    style={{ color: '#ffd700' }}
                    />
                }
                fractions={2}
                readonly
                initialRating={3}
            />
        </div>
    )
}
export default BusinessRating;