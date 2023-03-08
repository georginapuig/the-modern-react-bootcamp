import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@mui/material/TextField';

export default function EditTodoForm({ id, task, edit, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        edit(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: '1rem', width: '50%' }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}
