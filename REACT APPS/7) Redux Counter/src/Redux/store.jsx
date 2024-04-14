import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice"

export const store = configureStore({
  reducer : {
    counter : CounterSlice
  },
})
// Store -> multiple slices se bnta hai ek store. uss slice ke reducer ko call krna h.