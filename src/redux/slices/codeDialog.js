import {createSlice} from "@reduxjs/toolkit";


export const codeDialog = createSlice({

    name: "codeDialog",
    initialState: {
        codeDialog : {
            code:``,
            viewDialog: false
        }

    },
    reducers :{
        setCode : (state,action) => {
            state.codeDialog.code = action.payload;
            state.codeDialog.viewDialog = true;
        },
        closeCodeDialog : (state) => {
            state.codeDialog.code = ``
            state.codeDialog.viewDialog = false;
        }
    }
});

export const {setCode,closeCodeDialog} = codeDialog.actions;

export default codeDialog.reducer;