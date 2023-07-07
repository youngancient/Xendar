import {
  ButtonGroupStyles,
  CancelSearchBtnStyles,
} from "@/styles/ButtonStyles/ButtonGroup";
import React, { FunctionComponent } from "react";
import FilterButton, { IFilterButton } from "./FilterButton";
import { useRouter } from "next/router";
import { Error } from "../Icons/Icons";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { resetSearchQuery } from "@/redux/dataSlice";

export interface IButtonGroup {
  filters: IFilterButton[];
}

const ButtonGroup: FunctionComponent<IButtonGroup> = ({ filters }) => {
  const router = useRouter();
  const {isSearching} = useAppSelector((state:RootState) => state.data);
  const dispatch = useAppDispatch();
  const cancelSearch = () => {
    dispatch(resetSearchQuery());
  };
  return (
    <ButtonGroupStyles>
      {router.pathname === "/courses" && isSearching && (
        <CancelSearchBtnStyles onClick={cancelSearch}>
          <p>Cancel</p><Error />
        </CancelSearchBtnStyles>
      )}
      {filters.map((ele, index) => (
        <FilterButton
          key={index}
          filter={ele.filter}
          isSelected={ele.isSelected}
          filterByType={ele.filterByType}
        />
      ))}
    </ButtonGroupStyles>
  );
};

export default ButtonGroup;
