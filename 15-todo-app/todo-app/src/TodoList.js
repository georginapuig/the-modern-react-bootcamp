import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: ['do laundry', 'cook'] };
  }

  add = (item) => {
    this.setState({ todos: [...this.state.todos, item] });
  }

  render() {
    const list = this.state.todos.map(item => <Todo todo={item} />);

    return (
      <div>
        <NewTodoForm addItem={this.add} />
        {list}
      </div>
    )
  }
}
