import { createSlice } from "@reduxjs/toolkit";

export const problemTypeSlice = createSlice({
    name:"problemType",
    initialState:{difficulty:true},
    reducers :{
        changeTypeTrue : (state) => {
            state.difficulty = true;
        },
        changeTypeFalse : (state) => {
            state.difficulty = false;
        }
    }
})

export const {changeTypeFalse,changeTypeTrue} = problemTypeSlice.actions;
export default problemTypeSlice.reducer;

