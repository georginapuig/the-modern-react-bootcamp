import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

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
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className='Palette-colors'>{colorBoxes}</div>
        {/* footer */}
      </div>
    );
  }
}
