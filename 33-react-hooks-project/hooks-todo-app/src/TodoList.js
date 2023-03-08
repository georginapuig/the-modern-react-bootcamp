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
            <Todo
              id={todo.id}
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              remove={props.remove}
              toggle={props.toggle}
              edit={props.edit}
            />
            {i < props.todos.length - 1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}
