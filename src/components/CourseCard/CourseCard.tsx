import { CourseCardStyles } from "@/styles/CourseStyles/CourseCard";
import { DesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
import React, { FunctionComponent, MouseEvent, useEffect, useRef, useState } from "react";
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
import { motion } from "framer-motion";
import { msgVariants } from "@/Animations/LandingPageVariants";
import { useOutsideClick } from "./OutsideClick";

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
  const [isheartHovered, setIsheartHovered] = useState(false);
  const handleOnHover = (e: MouseEvent<HTMLButtonElement>) => {
    setIsheartHovered(true);
    console.log("ee work")
  };
  const handleNotOnHover = (e: MouseEvent<HTMLButtonElement>) => {
    setIsheartHovered(false);
  };
  // clicking outside the mobile to close the msg div because mouseLeave doesnt work on mobile
  const ref = useOutsideClick(() => {
    setIsheartHovered(false);
  });

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
            <motion.div
              className="msg"
              variants={msgVariants}
              initial="initial"
              animate={isheartHovered ? "final" : "exit"}
            >
              <span>{isLoved ? "Added to Wishlist" : "Add to Wishlist"}</span>
            </motion.div>
          </div>
          <hr />
          <div className="content-inner">
            <div className="prices">
              <h4>&#8358;{nairaPrice?.toLocaleString()}</h4>
              <span>${dollarPrice}</span>
            </div>
            <button
              className="emoji"
              onClick={toggleFavorite}
              onMouseOver={handleOnHover}
              onMouseLeave={handleNotOnHover}
              ref={ref}
            >
              {isLoved ? <FilledHeart /> : <OutlineHeart />}
            </button>
          </div>
        </div>
      </CourseCardStyles>
    </DesktopMobile>
  );
};

export default CourseCard;
