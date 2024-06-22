import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementByValue:(state,action)=>{
        state.count += action.payload
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement:(state) => {
        state.count -=1;
    }
  },
});

export const { increment } = counterSlice.actions;
export const { decrement } = counterSlice.actions;
export const {incrementByValue} =counterSlice.actions;

export default counterSlice.reducer;
