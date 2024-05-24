import { createSlice } from "@reduxjs/toolkit";

const initialState = { notes: [] };

const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({ text: action.payload, createdOn: new Date() });
    },
    remove: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

const noteReducer = noteSlice.reducer;
const noteActions = noteSlice.actions;
const noteSelector = (state) => state.noteReducer.notes;
export { noteReducer, noteActions, noteSelector };
