// your ImageSlider code here!
import React from 'react';

export default class ImageSlider extends React.Component{

    constructor(){
        super()
        this.state = {currentSlideIndex: 0}
    }

    // currentSlide = () => {

    //     {console.log(this.state.currentSlideIndex)}
    // }

    render(){
        return (
           <p>I am on slide {this.state.currentSlideIndex}</p>
        )
    }
}