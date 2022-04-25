import React, { Component } from 'react';
import "./search.css";
import FormQuestion from './formQuestion'
import HomeHeaderNav from '../Homepage/HomeHeaderNav';
import SearchResults from './SearchResults/SearchResults';
//import { useLocation } from 'react-router-dom';
import { useBusinessSearch } from "../../yelpapi/useBusinessSearch"

const Search = () => {
  //static temporarily just to test if works
  //`${berkeleyuri}`
  //const burgeruri = encodeURI('burgers');
  //const berkeleyuri = encodeURI('Berkeley');
  //const location = new URL(`localhost:3000/search?find_desc=&find_loc=berkeley`);
  //const params = new URLSearchParams(location.search);

  //https://api.yelp.com/v3/businesses/search?location=Berkeley&term=boba
  const term = 'location=Berkeley&categories=restaurants';
  const isLocal = '';
  const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, isLocal);
  

  function search(query) {
    // do events vs business later.
  //  console.log('test');
    //console.log('test');
    //console.log('i am inside search.js search function');
    setSearchParams(query);
  }

  return (
      <div>
        <HomeHeaderNav></HomeHeaderNav>
        <h1 className='header'>What do you feel like doing?</h1>
        <FormQuestion businesses = {businesses}
                      //location = {locationParam}
                      //amountResults = {amountResults}
                      //shownResult = {businesses ? businesses.length : 0}
                      buttonClick = {search}
        />
        <SearchResults businesses={businesses}/>
      </div>
  )
}

export default Search;