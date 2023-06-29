import {
  setFilterCoursesByType,
  setFilteredByTimeCourses,
  setFiltersByTime,
  setFiltersByType,
} from "@/redux/dataSlice";
import { useAppDispatch } from "@/redux/hook";
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
  const handleFilter = () => {
    if (filterByType) {
      dispatch(setFiltersByType(filter));
      dispatch(setFilterCoursesByType());
    } else {
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
