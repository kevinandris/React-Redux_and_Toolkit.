import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
  },
  reducer: {
    // ! action
    TOGGLE_AUTH: (state) => { 
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { TOGGLE_AUTH } = authSlice.actions;
export default authSlice.reducer;
