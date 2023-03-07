import React from 'react';
import Todo from './Todo';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo, i) => (
          // To add a key to a fragment, we have to use the long-hand version
          // rather than <> </>, we have to use <React.Fragment>
          <>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
