import { CourseCardStyles } from "@/styles/CourseStyles/CourseCard";
import { FunctionComponent, useEffect, useState } from "react";
import ButtonGroup from "../Button/ButtonGroup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { CourseCatalogStyles } from "@/styles/CoursepageStyles/Coursepage";
import { CourseCard } from "../CourseCard/CourseCard";
import { convertToNaira } from "../Info/Wishlist";
import {
  resetFiltersByType,
  setFilterCoursesBySearch,
  setFilterCoursesByType,
} from "@/redux/dataSlice";
import { DetailH3Styles } from "@/styles/CoursepageStyles/CourseDetail";
import { ErrorMsg } from "./Error";

const CourseCatalog: FunctionComponent = () => {
  const {
    filtersByType,
    filteredByTypeCourses,
    allCourses,
    filteredBySearchCourses,
    filteredSearchCoursesByType,
    searchQuery,
    isSearching,
  } = useAppSelector((state: RootState) => state.data);
  const dispatch = useAppDispatch();
  const [lengthOfList, setLengthOfList] = useState(0);

  useEffect(() => {
    if (isSearching) {
      dispatch(resetFiltersByType());
      dispatch(setFilterCoursesBySearch());
    } else {
      dispatch(setFilterCoursesByType());
    }
  }, [dispatch, isSearching, searchQuery]);

  useEffect(() => {
    if (isSearching && filteredSearchCoursesByType) {
      setLengthOfList(filteredSearchCoursesByType?.length);
    }
    if (!isSearching && filteredByTypeCourses) {
      setLengthOfList(filteredByTypeCourses?.length);
    }
  }, [
    isSearching,
    filteredSearchCoursesByType,
    filteredByTypeCourses,
    searchQuery,
  ]);

  // fix the course card arguments issue
  return (
    <CourseCatalogStyles>
      <ButtonGroup filters={filtersByType} />
      <div className="info">
        {lengthOfList > 0 && (
          <p>
            There {lengthOfList > 1 ? "are " : "is "}
            <strong>
              {lengthOfList > 0 && lengthOfList}{" "}
              {lengthOfList > 1 ? "courses " : "course "}
            </strong>{" "}
            in this category
          </p>
        )}
      </div>
      <div className="group">
        {!isSearching &&
          filteredByTypeCourses?.map((ele, index) => (
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
              id={ele.id}
              duration={ele.duration}
              desc={ele.desc}
              skills={ele.skills}
              syllabus={ele.syllabus}
              requirements={ele.requirements}
              tutors={ele.tutors}
              reviews={ele.reviews}
              totalReviews={ele.totalReviews}
              introVideo={ele.introVideo}
            />
          ))}
        {isSearching &&
          filteredSearchCoursesByType?.map((ele, index) => (
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
              id={ele.id}
              duration={ele.duration}
              desc={ele.desc}
              skills={ele.skills}
              syllabus={ele.syllabus}
              requirements={ele.requirements}
              tutors={ele.tutors}
              reviews={ele.reviews}
              totalReviews={ele.totalReviews}
              introVideo={ele.introVideo}
            />
          ))}
        {/* fix the zero element issue */}
        {isSearching && filteredSearchCoursesByType?.length === 0 && (
          <ErrorMsg errormsg="No Match Found" />
        )}
      </div>
    </CourseCatalogStyles>
  );
};

export default CourseCatalog;
