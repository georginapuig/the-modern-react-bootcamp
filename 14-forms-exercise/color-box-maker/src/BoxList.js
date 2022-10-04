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

    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
  }

  renderBoxes() {
    return this.state.boxes.map(box => {
      return <Box 
        key={box.id} 
        id={box.id} 
        width={box.width} 
        height={box.height} 
        color={box.color} 
        removeBox={() => this.delete(box.id)}
      />
    });
  }

  add(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox]
    });
  }

  delete(id) {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  }

  render() {
    return (
      <div>
        <h1>Color Box Maker</h1>
        <BoxForm addBox={this.add} />
        {this.renderBoxes()}
      </div>
    )
  }
}
