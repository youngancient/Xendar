import { setFilteredByTimeCourses, setFiltersByTime } from "@/redux/dataSlice";
import { useAppDispatch } from "@/redux/hook";
import { FilterButtonStyles } from "@/styles/ButtonStyles/ButtonGroup";
import React, { FunctionComponent } from "react";

export interface IFilterButton{
    filter : string;
    isSelected : boolean;
}
const FilterButton:FunctionComponent<IFilterButton> = ({filter, isSelected}) => {
    const dispatch = useAppDispatch();
    const handleFilter =()=>{
        dispatch(setFiltersByTime(filter));
        dispatch(setFilteredByTimeCourses());
    }
    return ( 
        <FilterButtonStyles onClick={handleFilter} $isSelected={isSelected}>
            {filter}
        </FilterButtonStyles>
     );
}
 
export default FilterButton;