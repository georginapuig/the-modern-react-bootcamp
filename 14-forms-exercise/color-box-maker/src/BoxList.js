import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        { width: '300', height: '150', color: 'lime' }
      ]
    }
  }

  renderBoxes() {
    return this.state.boxes.map(box => {
      return <Box width={box.width} height={box.height} color={box.color} />
    });
  }

  render() {
    return (
      <div>
        <h1>Color Box Maker</h1>
        <BoxForm />
        {this.renderBoxes()}
      </div>
    )
  }
}
