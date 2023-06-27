import React, { FunctionComponent, useEffect } from "react";
import SectionHead from "../SectionHead/SectionHead";
import ButtonGroup from "../Button/ButtonGroup";
import { PaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { CoursesGroupStyle } from "@/styles/HeroStyles/coursesGroup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { setFilteredByTimeCourses } from "@/redux/dataSlice";
import CourseCard from "../CourseCard/CourseCard";
import { convertToNaira } from "../Info/Wishlist";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import Link from "next/link";
import { CenterItemStyle } from "@/styles/HeroStyles/CenterItem";
import { PopularCoursesStyles } from "@/styles/HomepageStyles/PopularCourses";

const PopularCourses = () => {
  const { filtersByTime, filteredByTimeCourses, allCourses } = useAppSelector(
    (state: RootState) => state.data
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setFilteredByTimeCourses());
  }, [dispatch, allCourses]);

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
      <CenterItemStyle>
        <div className="pad">
          <Link href={"/courses"}>
            <div className="a">
              <LinkStyle color="var(--purple, #7d26cd)">
                View all Courses
              </LinkStyle>
            </div>
          </Link>
        </div>
      </CenterItemStyle>
    </PopularCoursesStyles>
  );
};

export default PopularCourses;
