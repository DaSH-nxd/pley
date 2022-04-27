import React, { useState, Component } from 'react';
import { Button, Radio, RadioGroup, Stack, HStack, VStack, Text } from '@chakra-ui/react'
//import { useForm, Controller } from "react-hook-form";

import './formQuestion.css'

function FormQuestion(props){

  const [boba, setBoba] = useState('0');
  const [eat, setEat] = useState('0');
  const [night, setNight] = useState('0');
  const [exciting, setExciting] = useState('0');
  const [budget, setBudget] = useState('1');




  //Building up the query search
  //Example: location=Berkeley&categories=restaurants&attributes=hot_and_new&price=1
  function submitQuery() {
    if(typeof props.buttonClick === 'function') {


      const nightlife = parseInt(night) ? '' : 'term=Nightlife'

      let bobarest = '';
      if (!parseInt(boba) && !parseInt(eat)) {
        bobarest = 'bubbletea,restaurants';
      } else if (!parseInt(boba)) {
        bobarest = 'bubbletea';
      } else if (!parseInt(eat)) {
        bobarest = 'restaurants';
      }

      //const boba = parseInt(boba) ? '' : 'bubbletea';

      //const restaurants = parseInt(eat) ? '' : 'restaurants';

      const newExciting = parseInt(exciting) ? '' : 'hot_and_new';

      const newQuery = `${nightlife}&location=Berkeley&categories=${bobarest}&attributes=${newExciting}&price=${budget}`;      
      //console.log(newQuery);

      //callback, rerun the search
      // do events vs business after i make only business work first.
      props.buttonClick(newQuery);
    }
  }

  function disableOthers() {

  }

  //if (!props.businesses) {
  //  return ()
  //}
    return (
      //<form name = "answers" onSubmit={this.handleSubmit}>
      <>
      <VStack className='form-container'>
        <HStack spacing={'24px'}> 
            <VStack>
                <Text fontSize={'xl'}>Are you looking for Boba?</Text>
                <RadioGroup onChange={setBoba} value={boba}>
                    <HStack>
                      <Radio value= {'0'}>Yes</Radio>
                      <Radio value={'1'}>No</Radio>
                    </HStack>
                </RadioGroup>
              </VStack>
            <VStack>
              <Text fontSize={'xl'}>Are you looking for a place to eat?</Text>
              <RadioGroup onChange={setEat} value={eat}>
                  <HStack>
                    <Radio value= {'0'}>Yes</Radio>
                    <Radio value={'1'}>No</Radio>
                  </HStack>
              </RadioGroup>
            </VStack>

            <VStack>
              <Text fontSize={'xl'}>Are you looking for something exciting?</Text>
              <RadioGroup onChange={setExciting} value={exciting}>
                <HStack>
                  <Radio value= {'0'}>Yes</Radio>
                  <Radio value={'1'}>No</Radio>
                </HStack>
              </RadioGroup>
            </VStack>
          </HStack>
          <HStack spacing={'24px'}>
            <VStack>
                <Text fontSize={'xl'}>Are you going out for the night?</Text>
                <RadioGroup onChange={setNight} value={night}>
                  <HStack>
                    <Radio value= {'0'}>Yes</Radio>
                    <Radio value={'1'}>No</Radio>
                  </HStack>
                </RadioGroup>
              </VStack>
              <VStack>
                <Text fontSize={'xl'}>What is your budget?</Text>
                <RadioGroup onChange={setBudget} value={budget}>
                  <HStack>
                    <Radio value= {'1'}>$</Radio>
                    <Radio value= {'2'}>$$</Radio>
                    <Radio value= {'3'}>$$$</Radio>
                  </HStack>
                </RadioGroup>
              </VStack>
            </HStack>
          </VStack>
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