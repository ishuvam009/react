import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import handleAddTodo from './CreateTodos';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={handleAddTodo} variant="contained" endIcon={<SendIcon />}>
        Add a ToDo
      </Button>
    </Stack>
  );
}
