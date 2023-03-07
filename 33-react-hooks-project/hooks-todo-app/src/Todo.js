import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from '@mui/material';

export default function Todo({ task, completed }) {
  return (
    <ListItem>
      <Checkbox disableRipple tabIndex={-1} checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Edit'>
          <EditIcon></EditIcon>
        </IconButton>
        <IconButton aria-label='Delete'>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
