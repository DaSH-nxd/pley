import React, { useState, Component } from 'react';
import { Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import './formQuestion.css'

function FormQuestion(props){

  const [localevent, setLocalEvent] = useState(true);
  const [eat, setEat] = useState(true);
  const [night, setNight] = useState(true);
  const [exciting, setExciting] = useState(true);
  const [budget, setBudget] = useState(1);

  function submit(e) {
    if(typeof props.search === 'function') {
      const isLocal = localevent ? 'events' : 'businesses';
      
      const isEat = eat ? 'restaurants' : '';
      const isNight = night ? 'nightlife' : '';
      const categories = isEat + isNight;

      const newExciting = exciting ? 'hot_and_new' : '';

      const money = '$';
      if (budget == 1) {
        const money = '$';
      } else if (budget == 2) {
        const money = '$$';
      } else {
        const money = '$$$';
      }
      
      const newQuery = `categories=${categories}&attributes=${newExciting}&price=${money}`;

      //callback, rerun the search
      // do events vs business after i make only business work first.
      props.search(newQuery)
    }
  }

  //function create

  //handleSubmit(event) {
    //TODO: fix specific validations check, add error text, and submit information collected to backend
  //  if (!this.validateForm()) {
   //   alert('Empty textboxes, please fill out all message boxes'); 
   //   event.preventDefault();
  //  } else {
  //    alert('Submitted data');
  //  }
  //}

  //render() {
    return (
      //<form name = "answers" onSubmit={this.handleSubmit}>
      <>
      <div className = 'questions'> 
          <div>
          <Stack direction='column'>
              <p>Are you looking for a local event?</p>
              <RadioGroup onChange={setLocalEvent} value={localevent}>
                  <Stack direction='row'>
                    <Radio value= {true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                  </Stack>
              </RadioGroup>
            </Stack>
          </div>

          <div>
          <Stack direction='column'>
              <p>Are you looking for a place to eat?</p>
              <RadioGroup onChange={setEat} value={eat}>
                  <Stack direction='row'>
                    <Radio value= {true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                  </Stack>
              </RadioGroup>
              </Stack>
          </div>

          <div>
          <Stack direction='column'>
            <p>Are you looking for something exciting?</p>
              <RadioGroup onChange={setExciting} value={exciting}>
                  <Stack direction='row'>
                    <Radio value= {true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                  </Stack>
              </RadioGroup>
              </Stack>
          </div>
          
          <div>
          <Stack direction='column'>
            <p>Are you going out for the night?</p>
              <RadioGroup onChange={setNight} value={night}>
                  <Stack direction='row'>
                    <Radio value= {true}>Yes</Radio>
                    <Radio value={false}>No</Radio>
                  </Stack>
              </RadioGroup>
              </Stack>
          </div>

          <div>
          <Stack direction='column'>
            <p>What is your budget?</p>
              <RadioGroup onChange={setBudget} value={budget}>
                  <Stack direction='row'>
                    <Radio value= {1}>less than 10</Radio>
                    <Radio value= {2}>10 to 20</Radio>
                    <Radio value= {3}>more than 20</Radio>
                  </Stack>
              </RadioGroup>
              </Stack>
          </div>
        </div>
        <div className= 'button-mid'>
          <Button onClick = {props.buttonClick} colorScheme='blue'>Submit</Button>
        </div>
        </>
      //</form>
      //<input type="submit" value="Submit" />
      );
  //}
}


export default FormQuestion;