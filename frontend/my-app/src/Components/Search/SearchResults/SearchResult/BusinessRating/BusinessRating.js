import React from 'react';
import './BusinessRating.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';


function BusinessRating(props) {
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
                    style={{ color: '#FFD700' }}
                    />
                }
                fractions={2}
                readonly
                initialRating={props.rating}
            />
        </div>
    )
}
export default BusinessRating;