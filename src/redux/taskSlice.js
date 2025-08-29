import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stages: {
    todo: [],
    inprogress: [],
    done: [],
  },
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // ✅ Add new task to a specific stage
    addTask: (state, action) => {
      const { stageId, task } = action.payload;
      if (!state.stages[stageId]) {
        state.stages[stageId] = []; // safety fallback
      }
      state.stages[stageId].push(task);
    },

    // ✅ Move task between stages (or reorder inside the same stage)
    moveTask: (state, action) => {
      const { sourceStage, destStage, taskIndex, destIndex } = action.payload;

      if (!state.stages[sourceStage] || !state.stages[destStage]) return;

      const [movedTask] = state.stages[sourceStage].splice(taskIndex, 1);

      // If no destIndex is provided, push to the end
      if (destIndex !== undefined) {
        state.stages[destStage].splice(destIndex, 0, movedTask);
      } else {
        state.stages[destStage].push(movedTask);
      }
    },

    // ✅ Replace entire tasks state (for persistence / API sync)
    setTasks: (state, action) => {
      return {
        ...state,
        stages: {
          ...state.stages,
          ...action.payload.stages,
        },
      };
    },
  },
});

export const { addTask, moveTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
