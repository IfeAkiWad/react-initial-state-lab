// your ImageSlider code here!
import React, { Component } from 'react'

//It should only render out the text 'I am on slide <CURRENT_SLIDE>', 
//where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.


export default class ImageSlider extends Component {
    constructor(){
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    // increment = () => {
    //     const currentSlide = this.state.count + 1
    //     this.setState({
    //         count: currentSlide
    //     })
    // }

    render() {
        return <div>I am on slide {this.state.currentSlideIndex}</div>
    }
    
}