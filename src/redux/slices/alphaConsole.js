import { createSlice } from "@reduxjs/toolkit";

export const alphaConsoleSlice = createSlice({
    name:"alphaConsole",
    initialState: { 
        consoleState: { isConsole: false, isInput: false, isProblem: true, isAlphaGPT: false, isSolution: false }
    },
    reducers : {
        setConsole: (state) => {
            state.consoleState = {isConsole: true, isInput: false, isProblem: false, isAlphaGPT: false, isSolution: false }
        },
        setInput :(state) => {
            state.consoleState = {isConsole: false, isInput: true, isProblem: false, isAlphaGPT: false, isSolution: false }
        },
        setProblem :(state) => {
            state.consoleState = {isConsole: false, isInput: false, isProblem: true, isAlphaGPT: false, isSolution: false }
        },
        setAlpha :(state) => {
            state.consoleState = {isConsole: false, isInput: false, isProblem: false, isAlphaGPT: true, isSolution: false }
        },
        setSolution :(state) => {
            state.consoleState = {isConsole: false, isInput: false, isProblem: false, isAlphaGPT: false, isSolution: true }
        }
    }
})

export const {setConsole,setInput,setProblem,setAlpha,setSolution} = alphaConsoleSlice.actions;

export default alphaConsoleSlice.reducer;
