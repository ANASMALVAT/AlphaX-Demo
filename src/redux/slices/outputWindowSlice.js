import { createSlice } from "@reduxjs/toolkit";

export const outputWindowSlice = createSlice({
    name:"outputWindow",
    initialState : {windowState: "cancel"},
    reducers:{
        cancelWindow : (state) => {
            state.windowState = "cancel"
        },
        partialWindow: (state) => {
            state.windowState = "partial"
        },
        maximizeWindow: (state)=> {
            state.windowState = "maximise"
        },
    }
})

export const {cancelWindow, partialWindow, maximizeWindow} = outputWindowSlice.actions;
export default outputWindowSlice.reducer