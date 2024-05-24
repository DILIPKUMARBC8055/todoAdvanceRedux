import { createSlice } from "@reduxjs/toolkit";
import { todoActions } from "./todoReducer";

const initialState = {
  message: "",
};
const notificationSlice = createSlice({
  name: "notifcation",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  //   extraReducers: {
  //     "todo/add": (state, action) => {
  //       state.message = "todo added to the list";
  //     },
  //   },

  //recommended way for init defining reducers
  //   extraReducers: (builder) => {
  //     builder.addCase(todoActions.add, (state, action) => {
  //       state.message = "added to the list";
  //     });
  //   },

  //map
  extraReducers: {
    [todoActions.add]: (state, action) => {
      state.message = "added to the list";
    },
  },
});
const notificaitonReducer = notificationSlice.reducer;
const notifcationActions = notificationSlice.actions;
const notifcationSelector = (state) => state.notificaitonReducer.message;
export { notifcationSelector, notifcationActions, notificaitonReducer };
