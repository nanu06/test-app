import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { List } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
};

export default TaskList;
