import React, { Component } from 'react'

export default class BoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: '',
      height: '',
      color: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="width">Width</label>
        <input type="number" id='width' name='width' value={this.state.width} onChange={this.handleChange} />

        <label htmlFor="height">Height</label>
        <input type="number" id='height' name='height' value={this.state.height} onChange={this.handleChange} />

        <label htmlFor="color">Color</label>
        <input type="text" id='color' name='color' value={this.state.color} onChange={this.handleChange} />

        <button>Add box</button>
      </form>
    )
  }
}
