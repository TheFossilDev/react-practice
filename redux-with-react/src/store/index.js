import { createSlice, configureStore } from "@reduxjs/toolkit";

const redux = require("redux");

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  // Accesses all reducers this slice needs
  reducers: {
    inc(state) {
      state.counter++;
    },
    dec(state) {
      state.counter--;
    },
    add(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


const store = configureStore({
    reducer: counterSlice.reducer
});

const counterSubscriber = () => {
    const latestState = store.getState();
};

store.subscribe(counterSubscriber);

export const counterActions = counterSlice.actions;
export default store;
