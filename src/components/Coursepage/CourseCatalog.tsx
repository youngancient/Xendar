import { CourseCardStyles } from "@/styles/CourseStyles/CourseCard";
import { FunctionComponent } from "react";
import ButtonGroup from "../Button/ButtonGroup";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { CourseCatalogStyles } from "@/styles/CoursepageStyles/Coursepage";
import CourseCard from "../CourseCard/CourseCard";
import { convertToNaira } from "../Info/Wishlist";

const CourseCatalog: FunctionComponent = () => {
  const { filtersByType, allCourses } = useAppSelector(
    (state: RootState) => state.data
  );

//   figure out the filter mechanism later blud
  return (
    <CourseCatalogStyles>
      <ButtonGroup filters={filtersByType} />
      <div className="info">
        <p>
          There are <strong>{allCourses.length} courses</strong> in this category
        </p>
      </div>
      <div className="group">
        {allCourses.map((ele, index) => (
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
