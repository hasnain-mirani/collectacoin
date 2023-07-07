import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgramingData {
  // Define the structure of your programing data here
}

interface AutographData {
  // Define the structure of your autograph schedule data here
}

interface AddState {
  programingData: ProgramingData | null;
  autographData: AutographData | null;
}

const initialState: AddState = {
  programingData: null,
  autographData: null,
};

const addSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    setProgramingData: (state, action: PayloadAction<ProgramingData>) => {
      state.programingData = action.payload;
    },
    setAutographData: (state, action: PayloadAction<AutographData>) => {
      state.autographData = action.payload;
    },
  },
});

export const { setProgramingData, setAutographData } = addSlice.actions;
export default addSlice.reducer;
