import { createSlice } from "@reduxjs/toolkit";

export const solutionSlice = createSlice({
    name:"solutionSlice",
    initialState: { 
        solutionState: { java: false, cpp: false, python: true, javascript: false }
    },
    reducers : {
        setJava: (state) => {
            state.solutionState = {java: true, cpp: false, python: false, javascript: false }
        },
        setCPP :(state) => {
            state.solutionState = {java: false, cpp: true, python: false, javascript: false }
        },
        setPython :(state) => {
            state.solutionState = {java: false, cpp: false, python: true, javascript: false }
        },
        setJavascript :(state) => {
            state.solutionState = {java: false, cpp: false, python: false, javascript: true }
        }
    }
})

export const {setJava,setCPP,setPython,setJavascript} = solutionSlice.actions;

export default solutionSlice.reducer;
