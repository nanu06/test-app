import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { Button, Form, FormControl } from 'react-bootstrap';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <FormControl
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="mr-2"
      />
      <Button type="submit" variant="primary" className="mt-2">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskInput;
