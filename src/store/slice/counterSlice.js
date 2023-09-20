import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducer: {
    // ! actions
    ADD: (state) => {
      state.count += 1;
    },
    SUBTRACT: (state) => {
      state.count -= 1;
    },
    RESET: (state) => {
      state.count = 0;
    },
    ADD_FIVE: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { ADD, ADD_FIVE, SUBTRACT, RESET } = counterSlice.actions;
export default counterSlice.reducer;
