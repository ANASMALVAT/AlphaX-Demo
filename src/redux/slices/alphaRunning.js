import { createSlice } from "@reduxjs/toolkit";

export const AlphaRunningSice = createSlice({
    name:"AlphaRunning",
    initialState:{ isRunning : false },
    reducers:{
        alphaRunning : (state) =>{
            state.isRunning = true;
        },
        alphaStopRunning : (state) => {
            state.isRunning = false;
        }
    }
})

export const { alphaRunning,  alphaStopRunning } = AlphaRunningSice.actions;
export default AlphaRunningSice.reducer;