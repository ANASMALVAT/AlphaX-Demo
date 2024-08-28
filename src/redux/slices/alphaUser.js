import { createSlice } from "@reduxjs/toolkit";

export const alphaUser = createSlice({
    name:"alphaUser",
    initialState: { 
        alphaUser: {}
    },
    reducers : {
        setAlphaUser: (state,action) => {
            state.alphaUser = action.payload
        }
    }
})

export const {setAlphaUser} = alphaUser.actions;

export default alphaUser.reducer;
