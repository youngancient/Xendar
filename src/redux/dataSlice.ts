import { AllCourses, FiltersByTime } from "@/Constant/constant";
import { IFilterButton } from "@/components/Button/FilterButton";
import { ICourse } from "@/components/CourseCard/CourseCard";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialState{
    isNavOpen : boolean;
    isWishlistOpen : boolean;
    allCourse : ICourse[];
    filtersByTime : IFilterButton[];
}
const initialState:InitialState ={
    isNavOpen : false,
    isWishlistOpen : false,
    allCourse : AllCourses,
    filtersByTime : FiltersByTime,
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