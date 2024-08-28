import { createSlice } from "@reduxjs/toolkit";

export const userAuthorizationSlice = createSlice({
    name: 'userAuthorization',
    initialState:{authorize:false},
    reducers:{
        toggelUserAuthorizeTrue:(state) => {
            state.authorize = true;
        },
        toggelUserAuthorizeFalse:(state) => {
            state.authorize = false;
        }
    }
})

export  const { toggelUserAuthorizeTrue,toggelUserAuthorizeFalse } = userAuthorizationSlice.actions;
export default userAuthorizationSlice.reducer;



