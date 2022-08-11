import React, { Component } from 'react'
import { randomColor } from './helper'
import './Box.css'

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {color: randomColor(this.props.colors)};
    this.handleClick = this.handleClick.bind(this);
  }

  pickColor() {
    let newColor;

    do {
      newColor = randomColor(this.props.colors) 
    } while (newColor === this.state.color) {
      this.setState({color: newColor})
    }
    
    console.log(newColor)
  }

  handleClick() {
    this.pickColor();
  }

  render() {
    return(
      <div 
        className='Box' 
        style={{ backgroundColor: this.state.color }} 
        onClick={this.handleClick}>
      </div>
    );
  }
}