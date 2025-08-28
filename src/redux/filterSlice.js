import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priority: 'all', // example filter
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPriorityFilter: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export const { setPriorityFilter } = filterSlice.actions;
export default filterSlice.reducer;
