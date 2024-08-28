import { createSlice } from "@reduxjs/toolkit";

export const alphaNotificationSlice = createSlice({
    name:'alphaNotification',
    initialState:{Notification : ""},
    reducers  : {
        showNotification: (state,action) => {
            state.Notification =  action.payload;
        }
    }
})

export const {showNotification} = alphaNotificationSlice.actions;

export default alphaNotificationSlice.reducer; 