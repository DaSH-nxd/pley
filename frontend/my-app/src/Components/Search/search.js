import React, { Component } from 'react';
import "./search.css";
import TextQuestion from './textQuestion'
import HomeHeaderNav from '../Homepage/HomeNav';


const Search = () => {
  return (
      <div>
        
        <HomeHeaderNav></HomeHeaderNav>
        <h1 className='header'>What do you feel like doing?</h1>
        <TextQuestion></TextQuestion>
      </div>
  )
}

export default Search;