import { PopularCoursesStyles } from "@/styles/HeroStyles/PopularCourses";
import React, { FunctionComponent } from "react";
import SectionHead from "../SectionHead/SectionHead";
import ButtonGroup from "../Button/ButtonGroup";
import { PaddedSectionStyle } from "@/styles/HeroStyles/Section";
import { CoursesGroupStyle } from "@/styles/HeroStyles/coursesGroup";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";

const PopularCourses = () => {
    const {filtersByTime} = useAppSelector((state :RootState) => state.data);
    console.log(filtersByTime);
    // i want to autoselect the post popular button and display all courses based on the parameter
    // secondly i want to be able to switch it with the New button
    // I want to display the courses and style them
    // I want to complete the wishlist feature
  return (
    <PopularCoursesStyles>
      <SectionHead
        bigtext="Our Popular Courses"
        smalltext="Check out some of the top industry leading courses we offer"
      />
      <div className="inner">
        <PaddedSectionStyle>
            <ButtonGroup filters={filtersByTime}/>
            <CoursesGroupStyle>
                {/* i stopped here */}
            </CoursesGroupStyle>
        </PaddedSectionStyle>
      </div>
    </PopularCoursesStyles>
  );
};

export default PopularCourses;
