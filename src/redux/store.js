// const redux = require("redux");

import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducer";
import { configureStore } from "@reduxjs/toolkit";
import { notificaitonReducer } from "./reducers/notificationReducer";
import LoggerMiddleware from "./middleware/loggerMiddleware";

export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
    notificaitonReducer,
  },
  middleware: [LoggerMiddleware],
});
