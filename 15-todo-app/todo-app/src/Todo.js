import React, { Component } from 'react';
import './Todo.css'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    
    this.state = { isEditing: false, task: this.props.task }
  }
  
  edit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleUpdate = (evt) => {
    evt.preventDefault();
    // take new task data and pass up to parent
    this.props.updateItem(this.props.id, this.state.task)
    this.setState({ isEditing: false });
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleToggle = (evt) => {
    this.props.toggle(this.props.id)
  }

  render() {
    let result; 

    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.task} name='task' onChange={this.handleChange} />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div>
          <li className={this.props.completed ? 'completed' : ''} onClick={this.handleToggle}>{this.state.task}</li>
      
          <div>
            <button onClick={this.edit}>edit</button>
            <button onClick={this.props.removeItem}>X</button>
          </div>
        </div>
      )
    }
    return result;
  }
}
