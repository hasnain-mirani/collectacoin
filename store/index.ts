import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/state/userSlice";
import modeSlice from "@/state/modeSlice";
import formReducer from "@/state/addSlice";
import addSliceReducer from '@/state/seprateSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";
import userReducer from './../state/counterSlice'
export const store = configureStore({
  reducer: {
      userSlice, modeSlice,
     userReducer,
     form: formReducer,
     add: addSliceReducer,

  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const  useAppSelector:TypedUseSelectorHook<RootState> = useSelector