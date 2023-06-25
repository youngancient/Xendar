import { AllCourses, FiltersByTime } from "@/Constant/constant";
import { IFilterButton } from "@/components/Button/FilterButton";
import { ICourse } from "@/components/CourseCard/CourseCard";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  isNavOpen: boolean;
  isWishlistOpen: boolean;
  allCourses: ICourse[];
  filtersByTime: IFilterButton[];
  filteredByTimeCourses: ICourse[] | null;
}
const initialState: InitialState = {
  isNavOpen: false,
  isWishlistOpen: false,
  allCourses: AllCourses,
  filtersByTime: FiltersByTime,
  filteredByTimeCourses: null,
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    closeNav: (state) => {
      state.isNavOpen = false;
    },
    showWishlist: (state, { payload }) => {
      state.isWishlistOpen = payload;
    },
    setFiltersByTime: (state, { payload }) => {
      const filtered = state.filtersByTime.map((ele) => {
        if (payload === ele.filter) {
          return { ...ele, isSelected: true };
        } else {
          return { ...ele, isSelected: false };
        }
      });
      state.filtersByTime = filtered;
    },
    setFilteredByTimeCourses: (state) => {
      const filter = state.filtersByTime.find((ele) => ele.isSelected === true);
      const filtered = state.allCourses.filter((ele) => {
        return ele.category === filter?.filter;
      });
      state.filteredByTimeCourses = filtered;
    },
    toggleLoved: (state, {payload}) => {
        const toggled = state.allCourses.map((ele) => {
            if(payload === ele.name){
                return {...ele, isLoved : !ele.isLoved}
            }else{
                return {...ele};
            }
        });
        state.allCourses = toggled;
    },
    removeFromFavorite: (state, {payload}) =>{
        const filtered = state.allCourses.map(ele =>{
            if(payload === ele.name){
                return {...ele, isLoved : false}
            }else{
                return {...ele};
            }
        });
        state.allCourses = filtered;
    }
  },
});

export const {
  toggleNav,
  closeNav,
  showWishlist,
  setFiltersByTime,
  setFilteredByTimeCourses,
  toggleLoved,
  removeFromFavorite
} = dataSlice.actions;
export default dataSlice.reducer;
