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

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      console.log(todo.id, id)
      if (todo.id === id) {
        return { ...todo, task: updatedTask }
      }
      console.log(todo, updatedTask)
      return todo;
    });
    console.log(updatedTodos)
    this.setState({ todos: updatedTodos })
  }

  toggle = (id) => {
    const toggleCompletion = this.state.todos.map(todo => {
      console.log(todo, todo.completed)
      if (todo.id === id) return { ...todo, completed: !todo.completed }
      return todo;
    });
    this.setState({ todos: toggleCompletion })
  }

  render() {
    const list = this.state.todos.map((todo) => {
      return <Todo 
        key={todo.id} 
        id={todo.id} 
        task={todo.item} 
        removeItem={() => this.remove(todo.id)} 
        updateItem={this.update} 
        completed={todo.completed}
        toggle={this.toggle}
      />
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
