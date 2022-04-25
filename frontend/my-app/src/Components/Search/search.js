import React, { Component } from 'react';
import "./search.css";
import FormQuestion from './formQuestion'
import HomeHeaderNav from '../Homepage/HomeHeaderNav';
import SearchResults from './SearchResults/SearchResults';
//import { useLocation } from 'react-router-dom';
import { useBusinessSearch } from "../../yelpapi/useBusinessSearch"

const Search = () => {
  //static temporarily just to test if works
  const burgeruri = encodeURI('burgers');
  const berkeleyuri = encodeURI('Berkeley');
  const location = new URL(`localhost:3000/search?find_desc=${burgeruri}&find_loc=${berkeleyuri}`);
  const params = new URLSearchParams(location.search);

  const term = params.get('find_desc')
  const locationParam = params.get('find_loc');
  const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);

  function search(term, location) {
    console.log('test');
    setSearchParams({term, location});
  }

  return (
      <div>
        <HomeHeaderNav></HomeHeaderNav>
        <h1 className='header'>What do you feel like doing?</h1>
        <FormQuestion term = {term}
                      location = {locationParam}
                      amountResults = {amountResults}
                      shownResult = {businesses ? businesses.length : 0}
                      buttonClick = {search}
        />
        <SearchResults businesses={businesses}/>
      </div>
  )
}

export default Search;