import React, { Component } from 'react';
import "./search.css";
import TextQuestion from './textQuestion'
import HomeHeaderNav from '../Homepage/HomeHeaderNav';
import SearchResults from './SearchResults/SearchResults';

const Search = () => {
  return (
      <div>
        <HomeHeaderNav></HomeHeaderNav>
        <h1 className='header'>What do you feel like doing?</h1>
        <TextQuestion></TextQuestion>
        <SearchResults/>

      </div>
  )
}

export default Search;