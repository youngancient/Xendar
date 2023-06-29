import { CourseCardStyles } from "@/styles/CourseStyles/CourseCard";
import { FunctionComponent, useEffect } from "react";
import ButtonGroup from "../Button/ButtonGroup";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { CourseCatalogStyles } from "@/styles/CoursepageStyles/Coursepage";
import CourseCard from "../CourseCard/CourseCard";
import { convertToNaira } from "../Info/Wishlist";
import { setFilterCoursesByType } from "@/redux/dataSlice";

const CourseCatalog: FunctionComponent = () => {
  const { filtersByType, filteredByTypeCourses, allCourses } = useAppSelector(
    (state: RootState) => state.data
  );
  const dispatch = useAppDispatch();
  //   figure out the filter mechanism later blud
  useEffect(() => {
    dispatch(setFilterCoursesByType());
  }, [dispatch, allCourses]);

  const len = filteredByTypeCourses?.length;

  return (
    <CourseCatalogStyles>
      <ButtonGroup filters={filtersByType} />
      <div className="info">
        {len && (
          <p>
            There {len > 1 ? "are " : "is "}
            <strong>
              {len} {len > 1 ? "courses " : "course "}
            </strong>{" "}
            in this category
          </p>
        )}
      </div>
      <div className="group">
        {filteredByTypeCourses?.map((ele, index) => (
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
      </div>
    </CourseCatalogStyles>
  );
};

export default CourseCatalog;
