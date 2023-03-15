import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((colors) => {
      return <ColorBox background={colors} />;
    });

    return (
      <div className='Palette'>
        {/* navbar */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
