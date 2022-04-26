import React, { useState } from 'react';
import "./search.css";
import FormQuestion from './formQuestion'
import HomeHeaderNav from '../Homepage/HomeHeaderNav';
import SearchResults from './SearchResults/SearchResults';
//import { useLocation } from 'react-router-dom';
import { useBusinessSearch } from "../../yelpapi/useBusinessSearch"
import { Button } from '@chakra-ui/react';

const Search = () => {
  //static temporarily just to test if works
  //`${berkeleyuri}`
  //const burgeruri = encodeURI('burgers');
  //const berkeleyuri = encodeURI('Berkeley');
  //const location = new URL(`localhost:3000/search?find_desc=&find_loc=berkeley`);
  //const params = new URLSearchParams(location.search);

  //https://api.yelp.com/v3/businesses/search?location=Berkeley&term=boba
  //temporary initial load until we have a first submit
  const term = 'location=Berkeley&categories=restaurants&';
  const isLocal = '';
  const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, isLocal);
  const [favorites, setFavorites] = useState([]);
  function search(query) {
    // do events vs business later.
    // console.log('test');
    //console.log('test');
    //console.log('i am inside search.js search function');
    setSearchParams(query);
    //new search so we reset favorites to empty
    setFavorites([]);
  }

  //add a business object to our favorites array 
  function setFav(business) {
    setFavorites(favorites.concat(business))
  }

  //remove a business object from our favorites array
  function unsetFav(business) {
    //copy of favorites
    let favCopy = [...favorites];
    const busID = businesses.id;
    let index = 0;
    for (const bus in favorites) {
      if (bus.id === busID) {
        favCopy.splice(index, 1);
        setFavorites(favCopy);
        return;
      }
      index += 1;
    }
  }
  
  

  const submitFavorites = () => {
    //make call to axios request here
}

  return (
    <>
      <div>
        <HomeHeaderNav></HomeHeaderNav>
        <h1 className='header'>What do you feel like doing?</h1>
        <FormQuestion businesses = {businesses}
                      //location = {locationParam}
                      //amountResults = {amountResults}
                      //shownResult = {businesses ? businesses.length : 0}
                      buttonClick = {search}
        />
        <SearchResults businesses={businesses} 
                       favorites={favorites}
                       setFavs={setFav}
                       unsetFavs={unsetFav}
        />
      </div>
      <div className= 'button-mid'>
          <Button onClick = {() => submitFavorites()} colorScheme='blue'>Submit</Button>
      </div>
    </>
  )
}

export default Search;