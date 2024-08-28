import { createSlice } from "@reduxjs/toolkit";

export const loginCredentials = createSlice({
    name:"loginCredentials",
    initialState: { 
        loginCredentials: {}
    },
    reducers : {
        setLoginCredentials: (state,action) => {
            state.loginCredentials = action.payload
        }
    }
})

export const {setLoginCredentials} = loginCredentials.actions;

export default loginCredentials.reducer;
