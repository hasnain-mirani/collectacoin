import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  entries: string[];
}

const initialState: FormState = {
  entries: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addEntry: (state, action: PayloadAction<string>) => {
      state.entries.push(action.payload);
    },
    updateEntry: (state, action: PayloadAction<{ index: number; value: string }>) => {
      const { index, value } = action.payload;
      state.entries[index] = value;
    },
  },
});

export const { addEntry, updateEntry } = formSlice.actions;

export default formSlice.reducer;
