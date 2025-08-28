import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stages: {
    todo: [],
    inprogress: [],
    done: [],
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { stage, task } = action.payload;
      state.stages[stage].push(task);
    },
    moveTask: (state, action) => {
      const { sourceStage, destStage, taskIndex } = action.payload;
      const [task] = state.stages[sourceStage].splice(taskIndex, 1);
      state.stages[destStage].splice(0, 0, task);
    },
    setTasks: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTask, moveTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
