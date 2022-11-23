import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10,
    message: '',
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
      state.message = `Counter: Increase to ${state.counter}`;
    },
    decrement: (state) => {
      state.counter -= 1;
      state.message = `Counter: Decrees to ${state.counter}`;
    },
    incrementByAmount: (state, action) => {
      state.counter = Number(state.counter) + Number(action.payload);
      state.message = `Counter: Increased to ${state.counter}`;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
