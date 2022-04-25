import React, { Component } from 'react';
import "./search.css";
import TextQuestion from './textQuestion'
import HomeHeaderNav from '../Homepage/HomeHeaderNav';
import SearchResults from './SearchResults/SearchResults';
//import { useLocation } from 'react-router-dom';
import { useBusinessSearch } from "../../yelpapi/useBusinessSearch"

const Search = () => {
  const burgeruri = encodeURI('burgers');
  const houstonuri = encodeURI('Houston');
  const location = new URL(`localhost:3000/search?find_desc=${burgeruri}&find_loc=${houstonuri}`);
  const params = new URLSearchParams(location.search);

  const term = params.get('find_desc')
  const locationParam = params.get('find_loc');
  const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);

  return (
      <div>
        <HomeHeaderNav></HomeHeaderNav>
        <h1 className='header'>What do you feel like doing?</h1>
        <TextQuestion></TextQuestion>
        <SearchResults businesses={businesses}/>

      </div>
  )
}

export default Search;