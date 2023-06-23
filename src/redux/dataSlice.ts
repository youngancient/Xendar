import { createSlice } from "@reduxjs/toolkit";

export interface InitialState{
    isNavOpen : boolean;
}
const initialState:InitialState ={
    isNavOpen : false
}
export const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers : {
        toggleNav: (state) => {
            state.isNavOpen = !state.isNavOpen;
        },

    },
});

export const {toggleNav} = dataSlice.actions;
export default dataSlice.reducer;