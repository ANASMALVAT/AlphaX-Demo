import { createSlice } from "@reduxjs/toolkit";

export const alphaPremiumUser = createSlice({
    name:"alphaPremiumUser",
    initialState: { 
        alphaPremiumUser: {}
    },
    reducers : {
        setAlphaPremiumUser: (state,action) => {
            state.alphaPremiumUser = action.payload
        }
    }
})

export const {setAlphaPremiumUser} = alphaPremiumUser.actions;

export default alphaPremiumUser.reducer;
