import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import sampleReducer from "./sampleSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    sample: sampleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Root state type
export type AppDispatch = typeof store.dispatch; // Dispatch type
export default store;
