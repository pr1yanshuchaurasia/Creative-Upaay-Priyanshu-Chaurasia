import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';
import filterReducer from './filterSlice';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('dashboardState');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('dashboardState', serializedState);
  } catch (e) {}
};

const persistedState = loadState();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
