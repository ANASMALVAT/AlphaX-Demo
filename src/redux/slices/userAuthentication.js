import { createSlice } from "@reduxjs/toolkit";

export const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState:{userLogin:false},
    reducers:{
        toggelUserLoginTrue:(state) => {
            state.userLogin = true;
        },
        toggelUserLoginFalse:(state) => {
            state.userLogin = false;
        }
    }
})

export  const { toggelUserLoginTrue,toggelUserLoginFalse } = userLoginSlice.actions;
export default userLoginSlice.reducer;



