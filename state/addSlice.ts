import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormValues {
  FirstName: "";
  LastName: "";
  Address: "";
  Hallno: "";
  Date: "";
  Time: "";
}
type FormEntry = {
  FirstName: string;
  LastName: string;
  Address: string;
  Hallno: string;
  Date: string;
  Time: string;
  // Add more fields as needed
};

const formSlice = createSlice({
  name: "form",
  initialState: [] as FormValues[],
  reducers: {
    addFormEntry: (state, action: PayloadAction<FormValues>) => {
      state.push(action.payload);
    },
    deleteFormEntry: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    updateFormEntry: (
      state,
      action: PayloadAction<{ index: number; updatedEntry: FormValues }>
    ) => {
      const { index, updatedEntry } = action.payload;
      state[index] = updatedEntry;
    },
    // index: editingIndex, updatedEntry
  },
});

export const { addFormEntry, deleteFormEntry, updateFormEntry } =
  formSlice.actions;

export default formSlice.reducer;
