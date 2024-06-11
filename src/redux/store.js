import { configureStore } from '@reduxjs/toolkit';
import tasksReducer, { storeSubscribe } from './tasksSlice';

// Load initial state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? { tasks: JSON.parse(serializedState) } : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState,
});

// Subscribe to store changes to save state to local storage
storeSubscribe(store);

export { store };
