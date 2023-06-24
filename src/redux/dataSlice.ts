import { createSlice } from "@reduxjs/toolkit";

export interface InitialState{
    isNavOpen : boolean;
    isWishlistOpen : boolean;
}
const initialState:InitialState ={
    isNavOpen : false,
    isWishlistOpen : false,
}
export const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers : {
        toggleNav: (state) => {
            state.isNavOpen = !state.isNavOpen;
        },
        closeNav : (state) =>{
            state.isNavOpen = false;
        },
        showWishlist : (state, {payload}) =>{
            state.isWishlistOpen = payload;
        },
    },
});

export const {toggleNav, closeNav, showWishlist } = dataSlice.actions;
export default dataSlice.reducer;