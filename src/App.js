import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container className="my-4">
      <h1 className="text-center">To-Do List</h1>
      <TaskInput />
      <TaskList />
    </Container>
  );
};

export default App;
