import { createSlice } from "@reduxjs/toolkit";

export const problemCategorySlice = createSlice({
    name:"problemCategory",
    initialState:{category:['All']},
    reducers :{
        changeCategory : (state,action) => {
            state.category = action.payload;
        }
    }
})

export const {changeCategory} = problemCategorySlice.actions;
export default problemCategorySlice.reducer;

