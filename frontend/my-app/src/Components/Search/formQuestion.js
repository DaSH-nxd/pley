import React, { useState, Component } from 'react';
import { Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
//import { useForm, Controller } from "react-hook-form";

import './formQuestion.css'

function FormQuestion(props){

  const [localevent, setLocalEvent] = useState('0');
  const [eat, setEat] = useState('0');
  const [night, setNight] = useState('0');
  const [exciting, setExciting] = useState('0');
  const [budget, setBudget] = useState('1');



  //Building up the query search
  //Example: location=Berkeley&categories=restaurants&attributes=hot_and_new&price=1
  function submitQuery() {
    if(typeof props.buttonClick === 'function') {

      //for events api later
      const isLocal = parseInt(localevent) ? 'businesses' : 'events';
      
      const nightlife = parseInt(night) ? '' : 'term=Nightlife'

      const restaurants = parseInt(eat) ? '' : 'restaurants';

      const newExciting = parseInt(exciting) ? '' : 'hot_and_new';

      const newQuery = `${nightlife}&location=Berkeley&categories=${restaurants}&attributes=${newExciting}&price=${budget}`;      
      //console.log(newQuery);

      //callback, rerun the search
      // do events vs business after i make only business work first.
      props.buttonClick(newQuery);
    }
  }

  //if (!props.businesses) {
  //  return ()
  //}
    return (
      //<form name = "answers" onSubmit={this.handleSubmit}>
      <>
      <div className = 'questions'> 
          <div>
          <Stack direction='column'>
              <p>Are you looking for a local event?</p>
              <RadioGroup onChange={setLocalEvent} value={localevent}>
                  <Stack direction='row'>
                    <Radio value= {'0'}>Yes</Radio>
                    <Radio value={'1'}>No</Radio>
                  </Stack>
              </RadioGroup>
            </Stack>
          </div>

          <div>
          <Stack direction='column'>
              <p>Are you looking for a place to eat?</p>
              <RadioGroup onChange={setEat} value={eat}>
                  <Stack direction='row'>
                    <Radio value= {'0'}>Yes</Radio>
                    <Radio value={'1'}>No</Radio>
                  </Stack>
              </RadioGroup>
              </Stack>
          </div>

          <div>
          <Stack direction='column'>
            <p>Are you looking for something exciting?</p>
              <RadioGroup onChange={setExciting} value={exciting}>
                  <Stack direction='row'>
                    <Radio value= {'0'}>Yes</Radio>
                    <Radio value={'1'}>No</Radio>
                  </Stack>
              </RadioGroup>
              </Stack>
          </div>
          
          <div>
          <Stack direction='column'>
            <p>Are you going out for the night?</p>
              <RadioGroup onChange={setNight} value={night}>
                  <Stack direction='row'>
                    <Radio value= {'0'}>Yes</Radio>
                    <Radio value={'1'}>No</Radio>
                  </Stack>
              </RadioGroup>
              </Stack>
          </div>

          <div>
          <Stack direction='column'>
            <p>What is your budget?</p>
              <RadioGroup onChange={setBudget} value={budget}>
                  <Stack direction='row'>
                    <Radio value= {'1'}>$</Radio>
                    <Radio value= {'2'}>$$</Radio>
                    <Radio value= {'3'}>$$$</Radio>
                  </Stack>
              </RadioGroup>
              </Stack>
          </div>
        </div>
        <div className= 'button-mid'>
          <Button onClick = {() => submitQuery()} colorScheme='blue'>Submit</Button>
        </div>
        </>
      //</form>
      //<input type="submit" value="Submit" />
      );
  //}
}


export default FormQuestion;