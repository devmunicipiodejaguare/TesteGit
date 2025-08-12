import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: any;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    armazenarNumero: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const { armazenarNumero } =
  counterSlice.actions;
export default counterSlice.reducer;
