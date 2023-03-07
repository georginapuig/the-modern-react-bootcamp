import { React, useState } from 'react';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Grid } from '@mui/material';

export default function Todo() {
  const initialTodos = [
    { id: 1, task: 'clean fishtank', completed: false },
    { id: 2, task: 'wash car', completed: false },
    { id: 3, task: 'grow beard', completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };
  const removeTodo = (todoId) => {
    // filter out removed todo
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    // call setTodos with new todos array
    setTodos(updatedTodos);
    console.log('remove');
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        justifyContent='center'
        style={{ marginTop: '1rem 0', padding: '0 1rem' }}
      >
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} remove={removeTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}
