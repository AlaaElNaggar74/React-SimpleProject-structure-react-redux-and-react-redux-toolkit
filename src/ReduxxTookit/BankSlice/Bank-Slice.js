import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

// const initialState: CounterState = {
//   value: 0,
// }

export const bankslice = createSlice({
  name: "bankslice",
  initialState: 1000,
  reducers: {
    withdraw: (state, action) => {
      return state - action.payload;
    },
    deposit: (state, action) => {
      return state + action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export let { withdraw, deposit } = bankslice.actions;

export default bankslice.reducer; ///as it export default you can rename it in any place with any name you need as liks store toolkite
