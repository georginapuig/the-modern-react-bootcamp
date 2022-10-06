import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = { item: '' };
  }
  
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.item);
    this.props.addItem({...this.state, id: uuidv4()});
    this.setState({ item: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="item">New item</label>
        <input type="text" id='item' name='item' value={this.state.item} onChange={this.handleChange} />
      
        <button>Add item</button>
      </form>
    )
  }
}
