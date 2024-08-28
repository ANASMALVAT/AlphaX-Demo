import {createSlice} from "@reduxjs/toolkit";


export const dropdownSlice = createSlice({

    name: "dropdownValues",
    initialState: {
        dropdownValue : 
        { 
            fontSize : "22px", 
            theme: "oceanic-next",
            language: { id: 63, name: "JavaScript", label: "JavaScript", value: "javascript" }
        }

    },
    reducers :{
        setFont : (state,action) => {
            state.dropdownValue.fontSize = action.payload;
        },
        setTheme : (state,action) => {
            state.dropdownValue.theme = action.payload;
        },
        setLanguage:(state,action) => {
            state.dropdownValue.language = action.payload;
        }
    }
});

export const {setFont, setTheme,setLanguage} = dropdownSlice.actions;

export default dropdownSlice.reducer;