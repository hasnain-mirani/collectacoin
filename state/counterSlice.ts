import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  entities: [],
  loading: false,
  value: 0,
} as any;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
      decrement: (state) => {
      state.value--;
    },
  },
 
});

export const { increment,decrement } = userSlice.actions;

export default userSlice.reducer;
