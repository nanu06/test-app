import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/tasksSlice';
import { Modal, Button, Form } from 'react-bootstrap';

const EditTaskPopup = ({ task, onClose }) => {
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, text: newText }));
    onClose();
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="secondary" onClick={onClose} className="ml-2">
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTaskPopup;
