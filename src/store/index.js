import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
      console.log(state);
    },
    decrement: (state) => {
      state.counterVal--;
      console.log(state);
    },
    add: (state, action) => {
      state.counterVal += action.payload;
      console.log(state);
    },
    subtract: (state, action) => {
      state.counterVal -= action.payload;
      console.log(state);
    },
    reset: (state) => {
      state.counterVal = 0;
    },
  },
});
const nextSlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      console.log(state);
      return state = !state;
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: nextSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export const otherActions = nextSlice.actions;
export default counterStore;
