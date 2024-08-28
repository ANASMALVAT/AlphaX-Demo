import { createSlice } from "@reduxjs/toolkit";

export const userLoginWindowSlice = createSlice({
    name:'userLoginWindow',
    initialState:{showLoginWindow:false},
    reducers:{
        toggelLoginWindowTrue : (state) =>{
            state.showLoginWindow = true;
        },
        toggelLoginWindowFalse: (state) => {
            state.showLoginWindow = false;
        }

    }
})
export  const { toggelLoginWindowTrue, toggelLoginWindowFalse } = userLoginWindowSlice.actions;
export default userLoginWindowSlice.reducer;