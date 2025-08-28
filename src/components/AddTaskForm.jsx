import React, { useState } from 'react';
import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const priorities = ['low', 'medium', 'high'];

const AddTaskForm = ({ onAddTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddTask({
      id: uuidv4(),
      name: name.trim(),
      description: description.trim(),
      priority,
    });

    setName('');
    setDescription('');
    setPriority('medium');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={2}>
      <TextField
        label="Task Name"
        size="small"
        fullWidth
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        label="Description"
        size="small"
        fullWidth
        multiline
        rows={2}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 1 }}
      />
      <FormControl size="small" fullWidth sx={{ mb: 1 }}>
        <InputLabel>Priority</InputLabel>
        <Select
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          {priorities.map((p) => (
            <MenuItem key={p} value={p}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" fullWidth>
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;
