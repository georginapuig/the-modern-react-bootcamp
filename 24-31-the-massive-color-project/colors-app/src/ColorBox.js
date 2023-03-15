import React, { Component } from 'react';
import './ColorBox.css';

export default class ColorBox extends Component {
  render() {
    const { background } = this.props;

    return (
      <div style={{ backgroundColor: background.color }} className='ColorBox'>
        <span>{background.name}</span>
      </div>
    );
  }
}
