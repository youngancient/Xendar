import { PopularCoursesStyles } from "@/styles/HeroStyles/PopularCourses";
import React, { FunctionComponent, useEffect } from "react";
import SectionHead from "../SectionHead/SectionHead";
import ButtonGroup from "../Button/ButtonGroup";
import { PaddedSectionStyle } from "@/styles/HeroStyles/Section";
import { CoursesGroupStyle } from "@/styles/HeroStyles/coursesGroup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { setFilteredByTimeCourses } from "@/redux/dataSlice";
import CourseCard from "../CourseCard/CourseCard";
import { convertToNaira } from "../Info/Wishlist";

const PopularCourses = () => {
  const { filtersByTime, filteredByTimeCourses,allCourses } = useAppSelector(
    (state: RootState) => state.data
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setFilteredByTimeCourses());
  }, [dispatch, allCourses]);
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
          <ButtonGroup filters={filtersByTime} />
          <CoursesGroupStyle>
            {filteredByTimeCourses?.map((ele, index) => (
              <CourseCard
                key={index}
                name={ele.name}
                level={ele.level}
                rating={ele.rating}
                dollarPrice={ele.dollarPrice}
                field={ele.field}
                category={ele.category}
                isLoved={ele.isLoved}
                img={ele.img}
                nairaPrice={convertToNaira(ele.dollarPrice)}
                noEnrolled={ele.noEnrolled}
              />
            ))}
          </CoursesGroupStyle>
        </PaddedSectionStyle>
      </div>
    </PopularCoursesStyles>
  );
};

export default PopularCourses;
