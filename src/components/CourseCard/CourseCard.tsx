import { CourseCardStyles } from "@/styles/CourseStyles/CourseCard";
import React, { FunctionComponent } from "react";

export interface ICourse {
  name: string;
  level: string;
  img: string;
  dollarPrice: number;
  nairaPrice: number | null;
  category: string;
  isLoved : boolean;
  rating : number;
  noEnrolled : number;
}
const CourseCard: FunctionComponent = () => {
  return <CourseCardStyles>course</CourseCardStyles>;
};

export default CourseCard;
