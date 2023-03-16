import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';
import ColorBox from './ColorBox';

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
    console.log(level);
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxes = colors[level].map((colors) => {
      return <ColorBox background={colors.hex} name={colors.name} />;
    });

    return (
      <div className='Palette'>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={this.changeLevel}
        />
        {/* navbar */}
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
