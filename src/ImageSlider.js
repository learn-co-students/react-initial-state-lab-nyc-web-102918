// your ImageSlider code here!
import React, { Component } from 'react';

//esto es un Component, y coloco export para poder importarlo en otro documento
export default class ImageSlider extends React.Component {
  constructor() {
    //debo trabajar con super siempre en este paso
    // Its initial state should have a property called currentSlideIndex that starts at 0
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }



  render() {
   return (
     //It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE>
     //is the value of this.state.currentSlideIndex.
     <p>I am on slide {this.state.currentSlideIndex}</p>
    )
  }
}

// nota acerca de this 
// 1. this within a function called with the keyword new in front will point to the newly created object
// 2. this within a function called with apply/call/bind will be the object passed as the first parameter
// 3. this within a function called with a context (i.e. Object.method()) will be the object.
// 4. this for a simple function call (fn()) will be the window (browser) or the global object (Node).
// If we are in strict mode this will be undefined for simple function calls
