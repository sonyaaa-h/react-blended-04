import { createSlice } from "@reduxjs/toolkit";

const fiterSlise = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterChange(state, action) {
            state.filter = action.payload;
        },
    },  
});

export const selectFilter = state => state.filter;

export const filterReducer = fiterSlise.reducer;