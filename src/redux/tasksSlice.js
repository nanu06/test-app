import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: uuidv4(), text: action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const existingTask = state.find((task) => task.id === id);
      if (existingTask) {
        existingTask.text = text;
      }
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;

export const storeSubscribe = (store) => {
  store.subscribe(() => {
    try {
      const serializedState = JSON.stringify(store.getState().tasks);
      localStorage.setItem('tasks', serializedState);
    } catch (e) {
      console.error(e);
    }
  });
};
