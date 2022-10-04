import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: '12345', item: 'cook' },
        { id: '67890', item: 'clean' },
      ],
    };
  }

  add = (item) => {
    // todos: [...prevsItem, newItem]
    this.setState({ todos: [...this.state.todos, item] });
  };

  remove = (item) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== item) });
  };

  render() {
    const list = this.state.todos.map((todo) => {
      return <Todo key={todo.id} id={todo.id} todo={todo.item} removeItem={() => this.remove(todo.id)} />
    });

    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm addItem={this.add} />
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}
