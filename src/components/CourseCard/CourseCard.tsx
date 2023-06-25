import { CourseCardStyles } from "@/styles/CourseStyles/CourseCard";
import { DesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import {
  BriefCase,
  EnrolledIcon,
  FilledHeart,
  OutlineHeart,
  RatingIcon,
} from "../Icons/Icons";
import { useAppDispatch } from "@/redux/hook";
import { toggleLoved } from "@/redux/dataSlice";

export interface ICourse {
  name: string;
  level: string;
  img: string;
  dollarPrice: number;
  nairaPrice: number | null;
  category: string;
  isLoved: boolean;
  rating: number;
  noEnrolled: number;
  field: string;
}
const CourseCard: FunctionComponent<ICourse> = ({
  name,
  level,
  img,
  dollarPrice,
  nairaPrice,
  category,
  isLoved,
  rating,
  noEnrolled,
  field,
}) => {
  const dispatch = useAppDispatch();
  const toggleFavorite = () => {
    dispatch(toggleLoved(name));
  };
  return (
    <DesktopMobile>
      <CourseCardStyles>
        <TabOnly>
          <Image
            alt={name}
            src={img}
            width={350}
            height={226}
            className="desktop img"
          />
          <Image
            alt={name}
            src={img}
            width={280}
            height={180}
            className="tab img"
          />
          <Image
            alt={name}
            src={img}
            width={210}
            height={118}
            className="mobile img"
          />
        </TabOnly>
        <div className="content">
          <h4>{name}</h4>
          <div className="icons">
            <div className="i">
              <BriefCase />
              <span>{level}</span>
            </div>
            <div className="icons-inner">
              <div className="i">
                <EnrolledIcon />
                <span>{noEnrolled}</span>
              </div>
              <div className="i">
                <RatingIcon />
                <span>{rating}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="content-inner">
            <div className="prices">
              <h4>&#8358;{nairaPrice}</h4>
              <span>${dollarPrice}</span>
            </div>
            <button className="emoji" onClick={toggleFavorite}>
              {isLoved ? <FilledHeart /> : <OutlineHeart />}
            </button>
          </div>
        </div>
      </CourseCardStyles>
    </DesktopMobile>
  );
};

export default CourseCard;
