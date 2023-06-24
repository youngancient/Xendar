import { ButtonGroupStyles, IFilter } from "@/styles/ButtonStyles/ButtonGroup";
import React, { FunctionComponent } from "react";
import FilterButton, { IFilterButton } from "./FilterButton";

export interface IButtonGroup {
    filters : IFilterButton[];
}
const ButtonGroup:FunctionComponent<IButtonGroup> = ({filters}) => {
    return (  
        <ButtonGroupStyles>
            {filters.map((ele, index)=>(
                <FilterButton key={index} filter={ele.filter} isSelected={ele.isSelected} />
            ))}
        </ButtonGroupStyles>
    );
}
 
export default ButtonGroup;