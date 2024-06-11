import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/tasksSlice';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Checkbox, TextField } from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text: editedText }));
    setIsEditing(false);
  };

  return (
    <ListItem divider button onClick={handleToggle}>
      <Checkbox checked={task.completed} />
      {isEditing ? (
        <TextField
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          autoFocus
          fullWidth
          variant="standard"
        />
      ) : (
        <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
      )}
      <ListItemSecondaryAction>
        {isEditing ? (
          <IconButton edge="end" aria-label="save" onClick={handleSave}>
            <Save />
          </IconButton>
        ) : (
          <>
            <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
              <Delete />
            </IconButton>
          </>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
