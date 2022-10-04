import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class BoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: '',
      height: '',
      color: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox({...this.state, id: uuidv4()});

    this.setState({
      width: '',
      height: '',
      color: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="width">Width</label>
          <input type="number" id='width' name='width' value={this.state.width} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="height">Height</label>
          <input type="number" id='height' name='height' value={this.state.height} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="color">Color</label>
          <input type="text" id='color' name='color' value={this.state.color} onChange={this.handleChange} />
        </div>

        <button>Add box</button>
      </form>
    )
  }
}
