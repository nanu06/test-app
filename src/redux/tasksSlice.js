import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Load initial state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      state.push({ id: uuidv4(), text: action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});

// Save tasks to local storage whenever they change
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (e) {
    console.error(e);
  }
};

// Subscribe to store changes to save state to local storage
const storeSubscribe = (store) => {
  store.subscribe(() => {
    saveState(store.getState().tasks);
  });
};

export const { addTask, deleteTask, editTask, toggleTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
export default tasksSlice.reducer;
export { storeSubscribe };
