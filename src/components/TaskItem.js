import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/tasksSlice';
import EditTaskPopup from './EditTaskPopup';
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <ListGroup.Item
      className={`d-flex justify-content-between align-items-center ${task.completed ? 'bg-light' : ''}`}
    >
      <span
        onClick={handleToggle}
        style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
      >
        {task.text}
      </span>
      <ButtonGroup>
        <Button variant="warning" size="sm" onClick={() => setIsEditing(true)}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </ButtonGroup>
      {isEditing && <EditTaskPopup task={task} onClose={() => setIsEditing(false)} />}
    </ListGroup.Item>
  );
};

export default TaskItem;
