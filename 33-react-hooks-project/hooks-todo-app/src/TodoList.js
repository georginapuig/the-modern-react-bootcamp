import React from 'react';
import Todo from './Todo';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

export default function TodoList(props) {
  if (props.todos.length)
    return (
      <Paper>
        <List>
          {props.todos.map((todo, i) => (
            // To add a key to a fragment, we have to use the long-hand version
            // rather than <> </>, we have to use <React.Fragment>
            <React.Fragment key={todo.id}>
              <Todo
                {...todo}
                id={todo.id}
                remove={props.remove}
                toggle={props.toggle}
                edit={props.edit}
              />
              {i < props.todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}
