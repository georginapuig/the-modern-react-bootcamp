import { React, useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Grid } from '@mui/material';

export default function Todo() {
  const initialTodos = [{ id: 1, task: 'clean fishtank', completed: false }];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(initialTodos);

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
          <TodoList
            todos={todos}
            remove={removeTodo}
            toggle={toggleTodo}
            edit={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
