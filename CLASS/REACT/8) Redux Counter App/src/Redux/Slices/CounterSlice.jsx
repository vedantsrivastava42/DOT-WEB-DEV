import {createSlice} from "@reduxjs/toolkit"

const intialState = {
    value:0,
}

//First create a slice using createSlice
const CounterSlice = createSlice({
    //inside createSlice 
    //name , initial state and functionality inside reducers
    //export reducers functionality
        name:"counter",
        intialState,
        reducers: {
            increment : (state) => {
                state.value += 1;
            },
            decrement: (state) => {
                state.value -= 1;
        }
}}
)
//This is syntax
export const {increment, decrement} =CounterSlice.actions;
