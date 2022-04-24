import React, { Component } from 'react';

class TextQuestion extends React.Component {
  constructor(props) {
    super(props);

    /* Dictionary containing all textbox inputs. */
    this.state = {
        input_q1: "",
        input_q2: "",
        input_q3: "",
        input_q4: "",
        input_q5: "",
        input_q6: "",
        input_q7: "",
        input_q8: "",
        input_q9: "",
        input_q10: "",
        input_q11: "",
        input_q12: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    var check = true; 
    for (const [key, value] of Object.entries(this.state)) {
      if (value === "") {
        check = false;
        console.log(key + " is empty");
      }
      /* other checks for specific questions */
    }
    return check;
  }


  handleSubmit(event) {
    //TODO: fix specific validations check, add error text, and submit information collected to backend
    if (!this.validateForm()) {
      alert('Empty textboxes, please fill out all message boxes'); 
      event.preventDefault();
    } else {
      alert('Submitted data');
    }
  }

  render() {
    return (
      <form name = "answers" onSubmit={this.handleSubmit}>

        <div className='question'>

        {/* QUESTION: can we dynamically change variable names in js? */}
        {/* <script> 
          for (var i = 1; i <= 16; i++){
          document.getElementsByClassName("question").innerHTML += 
            "<div className='box'> <label>Question 1 <input type='text' onChange={this.handleChange(" + i + ")} />" + i + "</a></div>"; 
          }
      </script> */}

{/* 
Follow-up on needing to regex specific inputs ie numbers/only alphanumeric etc.
https://stackoverflow.com/questions/7295843/allow-only-numbers-to-be-typed-in-a-textbox */}

          <div className='box'>
            <label>
              Are you looking for a local event?
              <input type="text" onChange={e => this.setState({ input_q1: e.target.value })} />
            </label>
          </div>

          <div className='box'>
            <label>
              Are you looking for a place to eat?
              <input type="text" onChange={e => this.setState({ input_q2: e.target.value })} />
            </label>
          </div>

          <div className='box'>
            <label>
            Are you going out for the night?
              <input type="text" onChange={e => this.setState({ input_q3: e.target.value })} />
            </label>
          </div>
          
          <div className='box'>
            <label>
            Are you looking for something new and exciting?
              <input type="text" onChange={e => this.setState({ input_q4: e.target.value })} />
            </label>
          </div>

          <div className='box'>
            <label>
            What is your budget?
              <input type="text" onChange={e => this.setState({ input_q5: e.target.value })} />
            </label>
          </div>

        
        </div>
        <input type="submit" value="Submit" />
        
      </form>
    );
  }
}


export default TextQuestion;