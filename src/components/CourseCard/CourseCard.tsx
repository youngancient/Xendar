  import {
    CourseCardStyles,
    EmojiButtonStyles,
  } from "@/styles/CourseStyles/CourseCard";
  import { DesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
  import React, {
    Dispatch,
    FunctionComponent,
    MouseEvent,
    SetStateAction,
    useEffect,
    useRef,
    useState,
  } from "react";
  import Image from "next/image";
  import {
    BriefCase,
    EnrolledIcon,
    FilledHeart,
    OutlineHeart,
    RatingIcon,
  } from "../Icons/Icons";
  import { useAppDispatch, useAppSelector } from "@/redux/hook";
  import {
    setFilterCoursesBySearch,
    setFilterCoursesByType,
    setFilterSearchedCoursesByType,
    toggleLoved,
  } from "@/redux/dataSlice";
  import { motion } from "framer-motion";
  import { msgVariants } from "@/Animations/LandingPageVariants";
  import { useOutsideClick } from "./OutsideClick";
  import Link from "next/link";
  import { useRouter } from "next/router";
  import { RootState } from "@/redux/store";

  export interface ICourse {
    id : number|null;
    name: string;
    level: string;
    img: string;
    dollarPrice: number;
    duration: number;
    nairaPrice: number | null;
    category: string;
    isLoved: boolean;
    rating: number;
    noEnrolled: number;
    field: string;
    desc: string;
    skills: string[];
    syllabus : IModule[];
    requirements : string[];
    tutors : ITutor[];
    reviews : IReview[];
    isEnrolled: boolean;
    totalReviews: number;
  }

  export interface IModule{
    title: string;
    number : number|null;
    topics : string[];
  }
  export interface ITutor{
    img: string;
    name : string;
    job : string;
    email : string;
  }
  export interface IReview{
    img : string;
    post : string;
    name : string;
    review : string;
    likes : number;
    daysAgo : number;
    comments: number;
  }
  export const CourseCard: FunctionComponent<ICourse> = ({
    name,
    id,
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
    const [isheartHovered, setIsheartHovered] = useState(false);
    const router = useRouter();
    const showDetail = () => {
      const slug = name.replaceAll("/", "-");
      const path = `/courses/${slug}`;
      // push the id
      router.push({
        pathname : path,
        query : {id: id}
      },path);
    };
    return (
      <DesktopMobile>
        <CourseCardStyles>
          <TabOnly>
            <Image
              alt={name}
              src={img}
              width={340}
              height={226}
              className="desktop img"
              onClick={showDetail}
            />
            <Image
              alt={name}
              src={img}
              width={230}
              height={140}
              className="tab img"
              onClick={showDetail}
            />
            <Image
              alt={name}
              src={img}
              width={164}
              height={105}
              className="mobile img"
              onClick={showDetail}
            />
          </TabOnly>
          <div className="content">
            <h4 onClick={showDetail}>{name}</h4>
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
              <FavEmojiButton
                isLoved={isLoved}
                name={name}
                isheartHovered={isheartHovered}
                setIsheartHovered={setIsheartHovered}
              />
            </div>
          </div>
        </CourseCardStyles>
      </DesktopMobile>
    );
  };

  export interface IFavBtn {
    isLoved: boolean;
    name: string;
    isheartHovered: boolean;
    setIsheartHovered: Dispatch<SetStateAction<boolean>>;
  }
  export const FavEmojiButton: FunctionComponent<IFavBtn> = ({
    isLoved,
    name,
    isheartHovered,
    setIsheartHovered,
  }) => {
    const dispatch = useAppDispatch();
    const toggleFavorite = () => {
      // when a favorite is added, we update all other half states
      dispatch(toggleLoved(name));
      dispatch(setFilterCoursesByType());
      dispatch(setFilterCoursesBySearch());
      dispatch(setFilterSearchedCoursesByType());
    };
    const handleOnHover = (e: MouseEvent<HTMLButtonElement>) => {
      setIsheartHovered(true);
    };
    const handleNotOnHover = (e: MouseEvent<HTMLButtonElement>) => {
      setIsheartHovered(false);
    };
    // clicking outside the mobile to close the msg div because mouseLeave doesnt work on mobile
    const ref = useOutsideClick(() => {
      setIsheartHovered(false);
    });
    return (
      <EmojiButtonStyles
        onClick={toggleFavorite}
        onMouseOver={handleOnHover}
        onMouseLeave={handleNotOnHover}
        ref={ref}
      >
        {isLoved ? <FilledHeart /> : <OutlineHeart />}
      </EmojiButtonStyles>
    );
  };
