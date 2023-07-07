import {
  setFilterCoursesBySearch,
  setFilterCoursesByType,
  setFilterSearchedCoursesByType,
  setFilteredByTimeCourses,
  setFiltersByTime,
  setFiltersByType,
} from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { FilterButtonStyles } from "@/styles/ButtonStyles/ButtonGroup";
import React, { FunctionComponent } from "react";

export interface IFilterButton {
  filter: string;
  isSelected: boolean;
  filterByType?: boolean;
}
const FilterButton: FunctionComponent<IFilterButton> = ({
  filter,
  isSelected,
  filterByType,
}) => {
  const dispatch = useAppDispatch();
  const {isSearching} = useAppSelector((state:RootState) => state.data);
  
  const handleFilter = () => {
    if (filterByType) {
      dispatch(setFiltersByType(filter));
      isSearching ? dispatch(setFilterSearchedCoursesByType()) : dispatch(setFilterCoursesByType());
    } else {
      // for homepage popular and new filters
      dispatch(setFiltersByTime(filter));
      dispatch(setFilteredByTimeCourses());
    }
  };
  return (
    <FilterButtonStyles onClick={handleFilter} $isSelected={isSelected}>
      {filter}
    </FilterButtonStyles>
  );
};

export default FilterButton;
