import React, { Component } from 'react';
import './Todo.css';

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
        <div className='Todo'>
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.task} name='task' onChange={this.handleChange} />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className='Todo'>
          <li className={this.props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={this.handleToggle}>{this.state.task}</li>
      
          <div className='Todo-buttons'>
            <button onClick={this.edit}>
              <i className="fas fa-pen"></i>
            </button>
            <button onClick={this.props.removeItem}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      )
    }
    return result;
  }
}
