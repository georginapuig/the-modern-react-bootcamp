import React from 'react';
import EditTodoForm from './EditTodoForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useToggleState from './hooks/useToggleState';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from '@mui/material';

export default function Todo({ id, task, completed, remove, toggle, edit }) {
  const [isEditing, toggleEditing] = useToggleState(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          edit={edit}
          toggleEditForm={toggleEditing}
        />
      ) : (
        <>
          <Checkbox
            disableRipple
            tabIndex={-1}
            checked={completed}
            onClick={() => toggle(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Edit' onClick={toggleEditing}>
              <EditIcon></EditIcon>
            </IconButton>
            <IconButton aria-label='Delete' onClick={() => remove(id)}>
              <DeleteIcon></DeleteIcon>
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
