import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = { item: '' };
  }
  
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.item);
    this.props.addItem(this.state.item);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="item">Item</label>
          <input type="text" id='item' name='item' value={this.state.item} onChange={this.handleChange} />
        </div>

        <button>Add item</button>
      </form>
    )
  }
}
