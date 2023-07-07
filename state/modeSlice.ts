import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    mode: 'light'
}
export const globalSlice:any  = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setMode: (state)=> {
            state.mode  = state.mode === "light"? 'dark': "light";
        }
    },
    extraReducers: (builder) =>{
       builder
       .addMatcher(
        (action) => action.type === HYDRATE && action.payload.auth,
        (state, action) => {
          return {
            ...state,
            ...action.payload.global,
          };
        }
      );
    }
    })
export const {setMode} = globalSlice.actions;
export default globalSlice.reducer;