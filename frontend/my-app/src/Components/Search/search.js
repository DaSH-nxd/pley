import React, { useState } from 'react';
import "./search.css";
import FormQuestion from './formQuestion'
import HomeHeaderNav from '../Homepage/HomeHeaderNav';
import SearchResults from './SearchResults/SearchResults';
//import { useLocation } from 'react-router-dom';
import { useBusinessSearch } from "../../yelpapi/useBusinessSearch"
import { Button, Heading } from '@chakra-ui/react';
import axios from 'axios';

const Search = () => {
  //static temporarily just to test if works
  //`${berkeleyuri}`
  //const burgeruri = encodeURI('burgers');
  //const berkeleyuri = encodeURI('Berkeley');
  //const location = new URL(`localhost:3000/search?find_desc=&find_loc=berkeley`);
  //const params = new URLSearchParams(location.search);

  //https://api.yelp.com/v3/businesses/search?location=Berkeley&term=boba
  //temporary initial load until we have a first submit
  //bubble tea is an attributes ||| attributes = bubbletea
  const term = 'location=Berkeley&categories=pizza';
  const isLocal = '';
  const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, isLocal);
  const [favorites, setFavorites] = useState([]);
  
  /*
  if (!localStorage.clear()) {
    
  }
*/

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
  /*
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
  */
  
  /**
   *       <div className= 'submit-favs'>
          <Button onClick = {() => onSubmit()} colorScheme='pink'>Submit Favorites</Button>
      </div>
   */

  const onSubmit = () => {
    //make call to axios request here
    console.log(favorites);
    const data = {
      "favorites" : favorites
    }
    console.log(data);
    axios
      .post("http://localhost:4000/user/favorites")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
}

  return (
    <>
      <div>
        <HomeHeaderNav></HomeHeaderNav>
        <h1 className='header'>What do you feel like doing?</h1>
        <br/>
        <FormQuestion businesses = {businesses}
                      //location = {locationParam}
                      //amountResults = {amountResults}
                      //shownResult = {businesses ? businesses.length : 0}
                      buttonClick = {search}
        />
        <SearchResults businesses={businesses} 
                       favorites={favorites}
                       setFavs={setFav}
        />
      </div>
    </>
  )
}

export default Search;