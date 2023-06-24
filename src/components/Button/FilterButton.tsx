import { FilterButtonStyles } from "@/styles/ButtonStyles/ButtonGroup";
import React, { FunctionComponent } from "react";

export interface IFilterButton{
    filter : string;
    isSelected : boolean;
}
const FilterButton:FunctionComponent<IFilterButton> = ({filter, isSelected}) => {
    const handleFilter =()=>{
        console.log("e filter o");
    }
    return ( 
        <FilterButtonStyles onClick={handleFilter}>
            {filter}
        </FilterButtonStyles>
     );
}
 
export default FilterButton;