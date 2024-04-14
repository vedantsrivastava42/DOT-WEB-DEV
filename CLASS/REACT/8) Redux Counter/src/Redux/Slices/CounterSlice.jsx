import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;

// Explanation
// For Redux code
// Function ke andar object bnana hai usme 3 chiz pass karni h
// check counterslice.jsx for code
// 1) name
// 2) Initial State 
// 3) reducers -> define functionality 
// 4) jitne bhi functions likho uske action creator bn jate hai  by default
//    inn function ke implementation ko slice me se bahar nikalna hai uska syntax.
//    Export functions from counterslice.actions
// 5) slice ko export bhi karna padega
//    export default CounterSlice.reducer;