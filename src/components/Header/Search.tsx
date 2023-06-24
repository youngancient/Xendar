import { SearchStyle } from "@/styles/HeaderStyles/Search";
import React, { FunctionComponent } from "react";
import { NavMagnifyingGlass } from "../Icons/Icons";

const Search:FunctionComponent = () => {
    return (  
        <SearchStyle>
            <NavMagnifyingGlass />
            <input type="text" name="course" placeholder="Search for a course" />
        </SearchStyle>
    );
}
 
export default Search;