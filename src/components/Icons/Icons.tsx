import {
  removeFromFavorite,
  removeNotification,
  setFilterCoursesBySearch,
  setFilterCoursesByType,
  setFilterSearchedCoursesByType,
  showNotificationlist,
  showWishlist,
} from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { SocialStyles } from "@/styles/FooterStyles/Footer";
import { DesktopMobile } from "@/styles/HeroStyles/Hero";
import { TrashContStyle } from "@/styles/HeroStyles/Info";
import { FaqArrowStyles } from "@/styles/HomepageStyles/FaqStyles";
import Link from "next/link";
import {
  ContactSvgStyle,
  HeroMagnifyingGlassStyle,
  IMenu,
  IconStyle,
  MenuStyle,
  NavMagnifyingGlassStyle,
} from "@/styles/IconsStyles/icons";
import React, { FunctionComponent, ReactNode } from "react";
import { motion } from "framer-motion";
import { XtraSmall } from "@/styles/SectionHeadStyles/Small";
import { SmallsvgStyles } from "@/styles/ContactpageStyles/Contact";

export const Heart: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const handleMouseLeave = () => {
    dispatch(showWishlist(false));
  };
  const handleMouseOver = () => {
    dispatch(showWishlist(true));
  };
  const { allCourses } = useAppSelector((state: RootState) => state.data);
  const favorites = allCourses.filter((ele) => ele.isLoved === true);
  return (
    <IconStyle onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/bold/heart">
          <g id="vuesax/bold/heart_2">
            <g id="heart">
              <path
                id="Vector"
                d="M21.9198 4.13336C19.5065 4.13336 17.3465 5.3067 15.9998 7.10669C14.6532 5.3067 12.4932 4.13336 10.0798 4.13336C5.9865 4.13336 2.6665 7.46669 2.6665 11.5867C2.6665 13.1734 2.91984 14.64 3.35984 16C5.4665 22.6667 11.9598 26.6534 15.1732 27.7467C15.6265 27.9067 16.3732 27.9067 16.8265 27.7467C20.0398 26.6534 26.5332 22.6667 28.6398 16C29.0798 14.64 29.3332 13.1734 29.3332 11.5867C29.3332 7.46669 26.0132 4.13336 21.9198 4.13336Z"
                fill="#525252"
              />
            </g>
          </g>
        </g>
      </svg>
      <div className="value">
        <h6>{favorites.length}</h6>
      </div>
    </IconStyle>
  );
};
export const Notification: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const handleMouseLeave = () => {
    dispatch(showNotificationlist(false));
  };
  const handleMouseOver = () => {
    dispatch(showNotificationlist(true));
  };
  const { notificationList } = useAppSelector((state: RootState) => state.data);
  return (
    <IconStyle onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/bold/notification">
          <g id="vuesax/bold/notification_2">
            <g id="notification">
              <path
                id="Vector"
                d="M25.7868 19.32L24.4534 17.1067C24.1734 16.6134 23.9201 15.68 23.9201 15.1334V11.76C23.9201 8.62669 22.0801 5.92002 19.4268 4.65335C18.7334 3.42669 17.4534 2.66669 15.9868 2.66669C14.5334 2.66669 13.2268 3.45335 12.5334 4.69335C9.93342 5.98669 8.13342 8.66669 8.13342 11.76V15.1334C8.13342 15.68 7.88009 16.6134 7.60009 17.0934L6.25342 19.32C5.72009 20.2134 5.60009 21.2 5.93342 22.1067C6.25342 23 7.01342 23.6934 8.00009 24.0267C10.5868 24.9067 13.3068 25.3334 16.0268 25.3334C18.7468 25.3334 21.4668 24.9067 24.0534 24.04C24.9868 23.7334 25.7068 23.0267 26.0534 22.1067C26.4001 21.1867 26.3068 20.1734 25.7868 19.32Z"
                fill="#525252"
              />
              <path
                id="Vector_2"
                d="M19.7736 26.68C19.2136 28.2267 17.7336 29.3334 16.0002 29.3334C14.9469 29.3334 13.9069 28.9067 13.1736 28.1467C12.7469 27.7467 12.4269 27.2134 12.2402 26.6667C12.4136 26.6934 12.5869 26.7067 12.7736 26.7334C13.0802 26.7734 13.4002 26.8134 13.7202 26.84C14.4802 26.9067 15.2536 26.9467 16.0269 26.9467C16.7869 26.9467 17.5469 26.9067 18.2936 26.84C18.5736 26.8134 18.8536 26.8 19.1202 26.76C19.3336 26.7334 19.5469 26.7067 19.7736 26.68Z"
                fill="#525252"
              />
            </g>
          </g>
        </g>
      </svg>
      <div className="value">
        <h6>{notificationList?.length ? notificationList.length : 0}</h6>
      </div>
    </IconStyle>
  );
};

// will use this for both the menu icon and cancel, will recieve props to switch btw both
export interface IMenuComp {
  toggleMenu: () => void;
}

export const Menu: FunctionComponent<IMenuComp> = ({ toggleMenu }) => {
  const { isNavOpen } = useAppSelector((state: RootState) => state.data);

  return (
    <MenuStyle onClick={toggleMenu}>
      {isNavOpen ? (
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Menu H">
            <rect
              id="Top"
              x="2.80762"
              y="16.7782"
              width="24"
              height="2"
              rx="1"
              transform="rotate(-45 2.80762 16.7782)"
              fill="#272727"
            />
            <rect
              id="Bottom"
              x="4.22168"
              y="-0.192383"
              width="24"
              height="2"
              rx="1"
              transform="rotate(45 4.22168 -0.192383)"
              fill="#272727"
            />
          </g>
        </svg>
      ) : (
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Menu H">
            <rect id="Top" width="24" height="2" rx="1" fill="#272727" />
            <rect
              id="Middle"
              y="8"
              width="24"
              height="2"
              rx="1"
              fill="#272727"
            />
            <rect
              id="Bottom"
              y="16"
              width="24"
              height="2"
              rx="1"
              fill="#272727"
            />
          </g>
        </svg>
      )}
    </MenuStyle>
  );
};

export const MagnifyingGlass: FunctionComponent = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="akar-icons:search">
        <path
          id="Vector"
          d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
          stroke="#272727"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
export const HeroMagnifyingGlass: FunctionComponent = () => {
  return (
    <HeroMagnifyingGlassStyle>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0853 17.5L14.347 13.755M16.4186 8.75002C16.4186 10.6286 15.6723 12.4303 14.344 13.7587C13.0156 15.0871 11.2139 15.8334 9.33529 15.8334C7.45667 15.8334 5.655 15.0871 4.32661 13.7587C2.99823 12.4303 2.25195 10.6286 2.25195 8.75002C2.25195 6.8714 2.99823 5.06973 4.32661 3.74135C5.655 2.41296 7.45667 1.66669 9.33529 1.66669C11.2139 1.66669 13.0156 2.41296 14.344 3.74135C15.6723 5.06973 16.4186 6.8714 16.4186 8.75002V8.75002Z"
          stroke="#979797"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </HeroMagnifyingGlassStyle>
  );
};

export const NavMagnifyingGlass: FunctionComponent = () => {
  return (
    <NavMagnifyingGlassStyle>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0853 17.5L14.347 13.755M16.4186 8.75002C16.4186 10.6286 15.6723 12.4303 14.344 13.7587C13.0156 15.0871 11.2139 15.8334 9.33529 15.8334C7.45667 15.8334 5.655 15.0871 4.32661 13.7587C2.99823 12.4303 2.25195 10.6286 2.25195 8.75002C2.25195 6.8714 2.99823 5.06973 4.32661 3.74135C5.655 2.41296 7.45667 1.66669 9.33529 1.66669C11.2139 1.66669 13.0156 2.41296 14.344 3.74135C15.6723 5.06973 16.4186 6.8714 16.4186 8.75002V8.75002Z"
          stroke="#979797"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </NavMagnifyingGlassStyle>
  );
};

interface ITrash {
  name: string;
}
export const Trash: FunctionComponent<ITrash> = ({ name }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(removeFromFavorite(name));
    // when a favorite is removed, we update all other half states
    dispatch(setFilterCoursesByType());
    dispatch(setFilterCoursesBySearch());
    dispatch(setFilterSearchedCoursesByType());
  };
  return (
    <TrashContStyle onClick={handleDelete}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/linear/trash">
          <g id="vuesax/linear/trash_2">
            <g id="trash">
              <path
                id="Vector"
                d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                stroke="#E6736A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M7.08301 4.14167L7.26634 3.05C7.39967 2.25833 7.49967 1.66667 8.90801 1.66667H11.0913C12.4997 1.66667 12.608 2.29167 12.733 3.05833L12.9163 4.14167"
                stroke="#E6736A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M15.7087 7.61667L15.167 16.0083C15.0753 17.3167 15.0003 18.3333 12.6753 18.3333H7.32533C5.00033 18.3333 4.92533 17.3167 4.83366 16.0083L4.29199 7.61667"
                stroke="#E6736A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M8.6084 13.75H11.3834"
                stroke="#E6736A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_5"
                d="M7.91699 10.4167H12.0837"
                stroke="#E6736A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </TrashContStyle>
  );
};

interface ITrashNotif {
  id: string;
}
export const TrashNotification: FunctionComponent<ITrashNotif> = ({ id }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(removeNotification(id));
  };
  return (
    <TrashContStyle onClick={handleDelete}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/linear/trash">
          <g id="vuesax/linear/trash_2">
            <g id="trash">
              <path
                id="Vector"
                d="M17.5 4.98333C14.725 4.70833 11.9333 4.56667 9.15 4.56667C7.5 4.56667 5.85 4.65 4.2 4.81667L2.5 4.98333"
                stroke="#E6736A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M7.08301 4.14167L7.26634 3.05C7.39967 2.25833 7.49967 1.66667 8.90801 1.66667H11.0913C12.4997 1.66667 12.608 2.29167 12.733 3.05833L12.9163 4.14167"
                stroke="#E6736A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M15.7087 7.61667L15.167 16.0083C15.0753 17.3167 15.0003 18.3333 12.6753 18.3333H7.32533C5.00033 18.3333 4.92533 17.3167 4.83366 16.0083L4.29199 7.61667"
                stroke="#E6736A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M8.6084 13.75H11.3834"
                stroke="#E6736A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_5"
                d="M7.91699 10.4167H12.0837"
                stroke="#E6736A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </TrashContStyle>
  );
};

export const OutlineHeart = () => {
  return (
    <DesktopMobile>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="desktop"
      >
        <g id="vuesax/linear/heart">
          <g id="vuesax/linear/heart_2">
            <g id="heart">
              <path
                id="Vector"
                d="M10.5165 18.1152C10.2332 18.2152 9.7665 18.2152 9.48317 18.1152C7.0665 17.2902 1.6665 13.8485 1.6665 8.01521C1.6665 5.44021 3.7415 3.35687 6.29984 3.35687C7.8165 3.35687 9.15817 4.09021 9.99984 5.22354C10.8415 4.09021 12.1915 3.35687 13.6998 3.35687C16.2582 3.35687 18.3332 5.44021 18.3332 8.01521C18.3332 13.8485 12.9332 17.2902 10.5165 18.1152Z"
                stroke="#D92D20"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mobile"
      >
        <g id="vuesax/linear/heart">
          <g id="vuesax/linear/heart_2">
            <g id="heart">
              <path
                id="Vector"
                d="M7.32789 11.334C7.15068 11.3966 6.85882 11.3966 6.68162 11.334C5.17021 10.818 1.79297 8.66558 1.79297 5.01733C1.79297 3.40689 3.0907 2.10394 4.69072 2.10394C5.63927 2.10394 6.47836 2.56258 7.00475 3.27138C7.53115 2.56258 8.37545 2.10394 9.31879 2.10394C10.9188 2.10394 12.2165 3.40689 12.2165 5.01733C12.2165 8.66558 8.8393 10.818 7.32789 11.334Z"
                stroke="#D92D20"
                strokeWidth="0.938121"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </DesktopMobile>
  );
};

export const FilledHeart = () => {
  return (
    <DesktopMobile>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="desktop"
      >
        <g id="vuesax/bold/heart">
          <g id="vuesax/bold/heart_2">
            <g id="heart">
              <path
                id="Vector"
                d="M9.59899 5.49029L9.99935 6.02542L10.3997 5.49029C11.1514 4.48549 12.3559 3.83243 13.6994 3.83243C15.9792 3.83243 17.8327 5.68956 17.8327 7.99076C17.8327 8.92805 17.6832 9.79284 17.4236 10.5952L17.4226 10.5984C16.8001 12.5685 15.5233 14.1591 14.1412 15.347C12.7569 16.5367 11.2956 17.2974 10.355 17.6174L10.3549 17.6174L10.3496 17.6193C10.2781 17.6445 10.1511 17.6658 9.99935 17.6658C9.8476 17.6658 9.7206 17.6445 9.64909 17.6193L9.6491 17.6192L9.64374 17.6174C8.70311 17.2974 7.24185 16.5367 5.85754 15.347C4.47542 14.1591 3.19864 12.5685 2.57611 10.5984L2.57612 10.5984L2.57507 10.5952C2.31549 9.79284 2.16602 8.92805 2.16602 7.99076C2.16602 5.68956 4.01949 3.83243 6.29935 3.83243C7.64278 3.83243 8.84726 4.48549 9.59899 5.49029Z"
                fill="#D92D20"
                stroke="#D92D20"
              />
            </g>
          </g>
        </g>
      </svg>
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mobile"
      >
        <g id="vuesax/bold/heart">
          <g id="vuesax/bold/heart_2">
            <g id="heart">
              <path
                id="Vector"
                d="M6.78171 3.4535L7.0321 3.78818L7.28249 3.4535C7.75263 2.82509 8.50593 2.41665 9.34613 2.41665C10.772 2.41665 11.9312 3.57813 11.9312 5.01733C11.9312 5.60352 11.8377 6.14438 11.6753 6.64617L11.6747 6.64821C11.2854 7.8803 10.4868 8.87513 9.62245 9.61801C8.75668 10.3621 7.84278 10.8378 7.2545 11.038L7.2545 11.038L7.25115 11.0391C7.20643 11.0549 7.12701 11.0682 7.0321 11.0682C6.93719 11.0682 6.85777 11.0549 6.81304 11.0391L6.81305 11.0391L6.80969 11.038C6.22141 10.8378 5.30752 10.3621 4.44175 9.61801C3.57736 8.87513 2.77884 7.8803 2.3895 6.64821L2.38951 6.64821L2.38885 6.64617C2.2265 6.14438 2.13302 5.60352 2.13302 5.01733C2.13302 3.57813 3.29221 2.41665 4.71807 2.41665C5.55827 2.41665 6.31156 2.82509 6.78171 3.4535Z"
                fill="#D92D20"
                stroke="#D92D20"
                strokeWidth="0.625414"
              />
            </g>
          </g>
        </g>
      </svg>
    </DesktopMobile>
  );
};

export const BriefCase = () => {
  return (
    <DesktopMobile>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="desktop"
      >
        <g id="vuesax/linear/briefcase">
          <g id="vuesax/linear/briefcase_2">
            <g id="briefcase">
              <path
                id="Vector"
                d="M5.33338 15.4402H10.6667C13.3467 15.4402 13.8267 14.3669 13.9667 13.0602L14.4667 7.72689C14.6467 6.10023 14.18 4.77356 11.3334 4.77356H4.66671C1.82005 4.77356 1.35338 6.10023 1.53338 7.72689L2.03338 13.0602C2.17338 14.3669 2.65338 15.4402 5.33338 15.4402Z"
                stroke="#747474"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M5.3335 4.77354V4.24021C5.3335 3.06021 5.3335 2.10687 7.46683 2.10687H8.5335C10.6668 2.10687 10.6668 3.06021 10.6668 4.24021V4.77354"
                stroke="#747474"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M9.33317 9.44023V10.1069C9.33317 10.1136 9.33317 10.1136 9.33317 10.1202C9.33317 10.8469 9.3265 11.4402 7.99984 11.4402C6.67984 11.4402 6.6665 10.8536 6.6665 10.1269V9.44023C6.6665 8.77356 6.6665 8.77356 7.33317 8.77356H8.6665C9.33317 8.77356 9.33317 8.77356 9.33317 9.44023Z"
                stroke="#747474"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M14.4335 8.10687C12.8935 9.22687 11.1335 9.89354 9.3335 10.1202"
                stroke="#747474"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_5"
                d="M1.74658 8.28687C3.24658 9.31353 4.93992 9.93353 6.66658 10.1269"
                stroke="#747474"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mobile"
      >
        <g id="vuesax/linear/briefcase">
          <g id="vuesax/linear/briefcase_2">
            <g id="briefcase">
              <path
                id="Vector"
                d="M3.33367 9.36662H6.667C8.342 9.36662 8.642 8.69578 8.7295 7.87912L9.042 4.54578C9.1545 3.52912 8.86283 2.69995 7.08367 2.69995H2.917C1.13783 2.69995 0.846168 3.52912 0.958668 4.54578L1.27117 7.87912C1.35867 8.69578 1.65867 9.36662 3.33367 9.36662Z"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M3.33398 2.69993V2.3666C3.33398 1.6291 3.33398 1.03326 4.66732 1.03326H5.33398C6.66732 1.03326 6.66732 1.6291 6.66732 2.3666V2.69993"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M5.83268 5.61662V6.03328C5.83268 6.03745 5.83268 6.03745 5.83268 6.04162C5.83268 6.49578 5.82852 6.86662 4.99935 6.86662C4.17435 6.86662 4.16602 6.49995 4.16602 6.04578V5.61662C4.16602 5.19995 4.16602 5.19995 4.58268 5.19995H5.41602C5.83268 5.19995 5.83268 5.19995 5.83268 5.61662Z"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M9.02148 4.78326C8.05898 5.48326 6.95898 5.89993 5.83398 6.0416"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_5"
                d="M1.09131 4.89575C2.02881 5.53742 3.08714 5.92492 4.16631 6.04575"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </DesktopMobile>
  );
};
export const BigBriefCase = () => {
  return (
    <DesktopMobile>
      <svg
        width="24"
        height="24"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="desktop"
      >
        <g id="vuesax/linear/briefcase">
          <g id="vuesax/linear/briefcase_2">
            <g id="briefcase">
              <path
                id="Vector"
                d="M5.33338 15.4402H10.6667C13.3467 15.4402 13.8267 14.3669 13.9667 13.0602L14.4667 7.72689C14.6467 6.10023 14.18 4.77356 11.3334 4.77356H4.66671C1.82005 4.77356 1.35338 6.10023 1.53338 7.72689L2.03338 13.0602C2.17338 14.3669 2.65338 15.4402 5.33338 15.4402Z"
                stroke="#747474"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M5.3335 4.77354V4.24021C5.3335 3.06021 5.3335 2.10687 7.46683 2.10687H8.5335C10.6668 2.10687 10.6668 3.06021 10.6668 4.24021V4.77354"
                stroke="#747474"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M9.33317 9.44023V10.1069C9.33317 10.1136 9.33317 10.1136 9.33317 10.1202C9.33317 10.8469 9.3265 11.4402 7.99984 11.4402C6.67984 11.4402 6.6665 10.8536 6.6665 10.1269V9.44023C6.6665 8.77356 6.6665 8.77356 7.33317 8.77356H8.6665C9.33317 8.77356 9.33317 8.77356 9.33317 9.44023Z"
                stroke="#747474"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M14.4335 8.10687C12.8935 9.22687 11.1335 9.89354 9.3335 10.1202"
                stroke="#747474"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_5"
                d="M1.74658 8.28687C3.24658 9.31353 4.93992 9.93353 6.66658 10.1269"
                stroke="#747474"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mobile"
      >
        <g id="vuesax/linear/briefcase">
          <g id="vuesax/linear/briefcase_2">
            <g id="briefcase">
              <path
                id="Vector"
                d="M3.33367 9.36662H6.667C8.342 9.36662 8.642 8.69578 8.7295 7.87912L9.042 4.54578C9.1545 3.52912 8.86283 2.69995 7.08367 2.69995H2.917C1.13783 2.69995 0.846168 3.52912 0.958668 4.54578L1.27117 7.87912C1.35867 8.69578 1.65867 9.36662 3.33367 9.36662Z"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M3.33398 2.69993V2.3666C3.33398 1.6291 3.33398 1.03326 4.66732 1.03326H5.33398C6.66732 1.03326 6.66732 1.6291 6.66732 2.3666V2.69993"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M5.83268 5.61662V6.03328C5.83268 6.03745 5.83268 6.03745 5.83268 6.04162C5.83268 6.49578 5.82852 6.86662 4.99935 6.86662C4.17435 6.86662 4.16602 6.49995 4.16602 6.04578V5.61662C4.16602 5.19995 4.16602 5.19995 4.58268 5.19995H5.41602C5.83268 5.19995 5.83268 5.19995 5.83268 5.61662Z"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M9.02148 4.78326C8.05898 5.48326 6.95898 5.89993 5.83398 6.0416"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_5"
                d="M1.09131 4.89575C2.02881 5.53742 3.08714 5.92492 4.16631 6.04575"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </DesktopMobile>
  );
};

export const EnrolledIcon = () => {
  return (
    <DesktopMobile>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="desktop"
      >
        <g id="vuesax/linear/profile-2user">
          <g id="vuesax/linear/profile-2user_2">
            <g id="profile-2user">
              <path
                id="Vector"
                d="M6.33327 8.02021C6.2666 8.01354 6.1866 8.01354 6.11327 8.02021C4.5266 7.96687 3.2666 6.66687 3.2666 5.06687C3.2666 3.43354 4.5866 2.10687 6.2266 2.10687C7.85993 2.10687 9.1866 3.43354 9.1866 5.06687C9.17993 6.66687 7.91993 7.96687 6.33327 8.02021Z"
                stroke="#747474"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M11.1667 3.44025C12.4601 3.44025 13.5001 4.48691 13.5001 5.77358C13.5001 7.03358 12.5001 8.06025 11.2534 8.10691C11.2001 8.10025 11.1401 8.10025 11.0801 8.10691"
                stroke="#747474"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M3.00004 10.4802C1.38671 11.5602 1.38671 13.3202 3.00004 14.3936C4.83337 15.6202 7.84004 15.6202 9.67337 14.3936C11.2867 13.3136 11.2867 11.5536 9.67337 10.4802C7.84671 9.26025 4.84004 9.26025 3.00004 10.4802Z"
                stroke="#747474"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M12.4531 14.1069C12.9331 14.0069 13.3865 13.8135 13.7598 13.5269C14.7998 12.7469 14.7998 11.4602 13.7598 10.6802C13.3931 10.4002 12.9465 10.2135 12.4731 10.1069"
                stroke="#747474"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mobile"
      >
        <g id="vuesax/linear/profile-2user">
          <g id="vuesax/linear/profile-2user_2">
            <g id="profile-2user">
              <path
                id="Vector"
                d="M3.81608 4.7291C3.77441 4.72493 3.72441 4.72493 3.67858 4.7291C2.68691 4.69576 1.89941 3.88326 1.89941 2.88326C1.89941 1.86243 2.72441 1.03326 3.74941 1.03326C4.77025 1.03326 5.59941 1.86243 5.59941 2.88326C5.59525 3.88326 4.80775 4.69576 3.81608 4.7291Z"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M6.83737 1.86664C7.6457 1.86664 8.2957 2.5208 8.2957 3.32497C8.2957 4.11247 7.6707 4.75414 6.89154 4.78331C6.8582 4.77914 6.8207 4.77914 6.7832 4.78331"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M1.73281 6.26664C0.724479 6.94164 0.724479 8.04164 1.73281 8.71247C2.87865 9.47914 4.75781 9.47914 5.90365 8.71247C6.91198 8.03747 6.91198 6.93747 5.90365 6.26664C4.76198 5.50414 2.88281 5.50414 1.73281 6.26664Z"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M7.6416 8.53326C7.9416 8.47076 8.22493 8.34993 8.45827 8.17076C9.10827 7.68326 9.10827 6.8791 8.45827 6.3916C8.2291 6.2166 7.94994 6.09993 7.6541 6.03326"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </DesktopMobile>
  );
};
export const BigEnrolledIcon = () => {
  return (
    <DesktopMobile>
      <svg
        width="24"
        height="24"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="desktop"
      >
        <g id="vuesax/linear/profile-2user">
          <g id="vuesax/linear/profile-2user_2">
            <g id="profile-2user">
              <path
                id="Vector"
                d="M6.33327 8.02021C6.2666 8.01354 6.1866 8.01354 6.11327 8.02021C4.5266 7.96687 3.2666 6.66687 3.2666 5.06687C3.2666 3.43354 4.5866 2.10687 6.2266 2.10687C7.85993 2.10687 9.1866 3.43354 9.1866 5.06687C9.17993 6.66687 7.91993 7.96687 6.33327 8.02021Z"
                stroke="#747474"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M11.1667 3.44025C12.4601 3.44025 13.5001 4.48691 13.5001 5.77358C13.5001 7.03358 12.5001 8.06025 11.2534 8.10691C11.2001 8.10025 11.1401 8.10025 11.0801 8.10691"
                stroke="#747474"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M3.00004 10.4802C1.38671 11.5602 1.38671 13.3202 3.00004 14.3936C4.83337 15.6202 7.84004 15.6202 9.67337 14.3936C11.2867 13.3136 11.2867 11.5536 9.67337 10.4802C7.84671 9.26025 4.84004 9.26025 3.00004 10.4802Z"
                stroke="#747474"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M12.4531 14.1069C12.9331 14.0069 13.3865 13.8135 13.7598 13.5269C14.7998 12.7469 14.7998 11.4602 13.7598 10.6802C13.3931 10.4002 12.9465 10.2135 12.4731 10.1069"
                stroke="#747474"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mobile"
      >
        <g id="vuesax/linear/profile-2user">
          <g id="vuesax/linear/profile-2user_2">
            <g id="profile-2user">
              <path
                id="Vector"
                d="M3.81608 4.7291C3.77441 4.72493 3.72441 4.72493 3.67858 4.7291C2.68691 4.69576 1.89941 3.88326 1.89941 2.88326C1.89941 1.86243 2.72441 1.03326 3.74941 1.03326C4.77025 1.03326 5.59941 1.86243 5.59941 2.88326C5.59525 3.88326 4.80775 4.69576 3.81608 4.7291Z"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M6.83737 1.86664C7.6457 1.86664 8.2957 2.5208 8.2957 3.32497C8.2957 4.11247 7.6707 4.75414 6.89154 4.78331C6.8582 4.77914 6.8207 4.77914 6.7832 4.78331"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_3"
                d="M1.73281 6.26664C0.724479 6.94164 0.724479 8.04164 1.73281 8.71247C2.87865 9.47914 4.75781 9.47914 5.90365 8.71247C6.91198 8.03747 6.91198 6.93747 5.90365 6.26664C4.76198 5.50414 2.88281 5.50414 1.73281 6.26664Z"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_4"
                d="M7.6416 8.53326C7.9416 8.47076 8.22493 8.34993 8.45827 8.17076C9.10827 7.68326 9.10827 6.8791 8.45827 6.3916C8.2291 6.2166 7.94994 6.09993 7.6541 6.03326"
                stroke="#747474"
                strokeWidth="0.9375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </DesktopMobile>
  );
};

export const RatingIcon = () => {
  return (
    <DesktopMobile>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="desktop"
      >
        <g id="vuesax/bold/star">
          <g id="vuesax/bold/star_2">
            <g id="star">
              <path
                id="Vector"
                d="M9.15327 3.11357L10.3266 5.46024C10.4866 5.7869 10.9133 6.10024 11.2733 6.16024L13.3999 6.51357C14.7599 6.74024 15.0799 7.7269 14.0999 8.70024L12.4466 10.3536C12.1666 10.6336 12.0133 11.1736 12.0999 11.5602L12.5733 13.6069C12.9466 15.2269 12.0866 15.8536 10.6533 15.0069L8.65994 13.8269C8.29994 13.6136 7.70661 13.6136 7.33994 13.8269L5.34661 15.0069C3.91994 15.8536 3.05327 15.2202 3.42661 13.6069L3.89994 11.5602C3.98661 11.1736 3.83327 10.6336 3.55327 10.3536L1.89994 8.70024C0.926606 7.7269 1.23994 6.74024 2.59994 6.51357L4.72661 6.16024C5.07994 6.10024 5.50661 5.7869 5.66661 5.46024L6.83994 3.11357C7.47994 1.84024 8.51994 1.84024 9.15327 3.11357Z"
                fill="#F9FD22"
              />
            </g>
          </g>
        </g>
      </svg>
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mobile"
      >
        <g id="vuesax/bold/star">
          <g id="vuesax/bold/star_2">
            <g id="star">
              <path
                id="Vector"
                d="M5.72104 1.66243L6.45437 3.12909C6.55437 3.33326 6.82104 3.52909 7.04604 3.56659L8.37521 3.78743C9.22521 3.92909 9.42521 4.54576 8.81271 5.15409L7.77937 6.18743C7.60437 6.36243 7.50854 6.69993 7.56271 6.94159L7.85854 8.22076C8.09187 9.23326 7.55437 9.62493 6.65854 9.09576L5.41271 8.35826C5.18771 8.22493 4.81687 8.22493 4.58771 8.35826L3.34187 9.09576C2.45021 9.62493 1.90854 9.22909 2.14187 8.22076L2.43771 6.94159C2.49187 6.69993 2.39604 6.36243 2.22104 6.18743L1.18771 5.15409C0.579373 4.54576 0.775206 3.92909 1.62521 3.78743L2.95437 3.56659C3.17521 3.52909 3.44187 3.33326 3.54187 3.12909L4.27521 1.66243C4.67521 0.866593 5.32521 0.866593 5.72104 1.66243Z"
                fill="#F9FD22"
              />
            </g>
          </g>
        </g>
      </svg>
    </DesktopMobile>
  );
};
export const BigRatingIcon = () => {
  return (
    <DesktopMobile>
      <svg
        width="24"
        height="24"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="desktop"
      >
        <g id="vuesax/bold/star">
          <g id="vuesax/bold/star_2">
            <g id="star">
              <path
                id="Vector"
                d="M9.15327 3.11357L10.3266 5.46024C10.4866 5.7869 10.9133 6.10024 11.2733 6.16024L13.3999 6.51357C14.7599 6.74024 15.0799 7.7269 14.0999 8.70024L12.4466 10.3536C12.1666 10.6336 12.0133 11.1736 12.0999 11.5602L12.5733 13.6069C12.9466 15.2269 12.0866 15.8536 10.6533 15.0069L8.65994 13.8269C8.29994 13.6136 7.70661 13.6136 7.33994 13.8269L5.34661 15.0069C3.91994 15.8536 3.05327 15.2202 3.42661 13.6069L3.89994 11.5602C3.98661 11.1736 3.83327 10.6336 3.55327 10.3536L1.89994 8.70024C0.926606 7.7269 1.23994 6.74024 2.59994 6.51357L4.72661 6.16024C5.07994 6.10024 5.50661 5.7869 5.66661 5.46024L6.83994 3.11357C7.47994 1.84024 8.51994 1.84024 9.15327 3.11357Z"
                fill="#F9FD22"
              />
            </g>
          </g>
        </g>
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mobile"
      >
        <g id="vuesax/bold/star">
          <g id="vuesax/bold/star_2">
            <g id="star">
              <path
                id="Vector"
                d="M5.72104 1.66243L6.45437 3.12909C6.55437 3.33326 6.82104 3.52909 7.04604 3.56659L8.37521 3.78743C9.22521 3.92909 9.42521 4.54576 8.81271 5.15409L7.77937 6.18743C7.60437 6.36243 7.50854 6.69993 7.56271 6.94159L7.85854 8.22076C8.09187 9.23326 7.55437 9.62493 6.65854 9.09576L5.41271 8.35826C5.18771 8.22493 4.81687 8.22493 4.58771 8.35826L3.34187 9.09576C2.45021 9.62493 1.90854 9.22909 2.14187 8.22076L2.43771 6.94159C2.49187 6.69993 2.39604 6.36243 2.22104 6.18743L1.18771 5.15409C0.579373 4.54576 0.775206 3.92909 1.62521 3.78743L2.95437 3.56659C3.17521 3.52909 3.44187 3.33326 3.54187 3.12909L4.27521 1.66243C4.67521 0.866593 5.32521 0.866593 5.72104 1.66243Z"
                fill="#F9FD22"
              />
            </g>
          </g>
        </g>
      </svg>
    </DesktopMobile>
  );
};

export const BlackQuote = () => {
  return (
    <svg
      width="45"
      height="24"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="&#226;&#128;&#156;"
        d="M7.02 0.508301L5.7 7.8283H8.1V15.9283H0V7.7083L2.16 0.508301H7.02ZM18.3 0.508301L16.98 7.8283H19.38V15.9283H11.28V7.7083L13.44 0.508301H18.3Z"
        fill="#272727"
      />
    </svg>
  );
};

export const WhiteQuote = () => {
  return (
    <svg
      width="45"
      height="24"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="&#226;&#128;&#156;"
        d="M7.02 0.508301L5.7 7.8283H8.1V15.9283H0V7.7083L2.16 0.508301H7.02ZM18.3 0.508301L16.98 7.8283H19.38V15.9283H11.28V7.7083L13.44 0.508301H18.3Z"
        fill="#FEFEFE"
      />
    </svg>
  );
};

export const Union = () => {
  return (
    <svg
      width="10"
      height="19"
      viewBox="0 0 10 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99922 5.50742C9.99922 7.83844 8.40381 9.79683 6.24536 10.3502V13.3371C6.99541 13.7685 7.50045 14.5779 7.50045 15.5053C7.50045 16.8858 6.38135 18.0049 5.00088 18.0049C3.62041 18.0049 2.50132 16.8858 2.50132 15.5053C2.50132 14.5823 3.0016 13.7762 3.7458 13.3432V10.3479C1.59194 9.79136 0.000976562 7.83519 0.000976562 5.50742C0.000976562 2.74648 2.23916 0.508301 5.0001 0.508301C7.76104 0.508301 9.99922 2.74648 9.99922 5.50742Z"
        fill="#7D26CD"
      />
    </svg>
  );
};

export interface IFaqArrow {
  $showAnswer: boolean;
}
export const FaqArrow: FunctionComponent<IFaqArrow> = ({ $showAnswer }) => {
  return (
    <FaqArrowStyles $showAnswer={$showAnswer}>
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/bold/arrow-down">
          <g id="vuesax/bold/arrow-down_2">
            <g id="arrow-down">
              <path
                id="Vector"
                d="M23.8935 11.415H15.5868H8.10682C6.82682 11.415 6.18682 12.9617 7.09349 13.8684L14.0002 20.775C15.1068 21.8817 16.9068 21.8817 18.0135 20.775L20.6402 18.1484L24.9202 13.8684C25.8135 12.9617 25.1735 11.415 23.8935 11.415Z"
                fill="#7D26CD"
              />
            </g>
          </g>
        </g>
      </svg>
    </FaqArrowStyles>
  );
};
export const ThinArrow: FunctionComponent<IFaqArrow> = ({ $showAnswer }) => {
  return (
    <FaqArrowStyles $showAnswer={$showAnswer}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/linear/arrow-up">
          <g id="vuesax/linear/arrow-up_2">
            <g id="arrow-up">
              <path
                id="Vector"
                d="M16.6004 12.5418L11.1671 7.10845C10.5254 6.46678 9.47539 6.46678 8.83372 7.10845L3.40039 12.5418"
                stroke="#7D26CD"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </FaqArrowStyles>
  );
};

export interface ISocials {
  href: string;
  children: ReactNode;
}
export const Socials: FunctionComponent<ISocials> = ({ href, children }) => {
  return (
    <SocialStyles>
      <Link href={href}>{children}</Link>
    </SocialStyles>
  );
};
export const Facebook = () => {
  return (
    <Socials href="#">
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="cib:facebook-f" clipPath="url(#clip0_2733_1277)">
          <path
            id="Vector"
            d="M11.7219 9.35057L12.1664 6.45507H9.38786V4.57607C9.38786 3.78407 9.77586 3.01157 11.0204 3.01157H12.2834V0.546574C12.2834 0.546574 11.1374 0.351074 10.0414 0.351074C7.75336 0.351074 6.25786 1.73807 6.25786 4.24857V6.45557H3.71436V9.35107H6.25786V16.3511H9.38786V9.35107L11.7219 9.35057Z"
            fill="#FEFEFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_2733_1277">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0 0.350586)"
            />
          </clipPath>
        </defs>
      </svg>
    </Socials>
  );
};
export const Linkedin = () => {
  return (
    <Socials href="#">
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="akar-icons:linkedin-box-fill">
          <path
            id="Vector"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.666504 2.24291C0.666504 1.91793 0.795601 1.60627 1.0254 1.37647C1.25519 1.14668 1.56686 1.01758 1.89184 1.01758H14.1065C14.2676 1.01732 14.4271 1.04882 14.5759 1.11029C14.7248 1.17176 14.8601 1.26199 14.974 1.3758C15.0879 1.48962 15.1783 1.6248 15.24 1.77359C15.3016 1.92238 15.3333 2.08186 15.3332 2.24291V14.4576C15.3333 14.6187 15.3018 14.7782 15.2402 14.9271C15.1787 15.0759 15.0884 15.2112 14.9745 15.3251C14.8606 15.4391 14.7254 15.5294 14.5766 15.591C14.4278 15.6527 14.2683 15.6843 14.1072 15.6842H1.89184C1.73087 15.6842 1.57148 15.6525 1.42277 15.5909C1.27406 15.5293 1.13895 15.439 1.02516 15.3251C0.911369 15.2113 0.821125 15.0761 0.759586 14.9274C0.698046 14.7786 0.666417 14.6192 0.666504 14.4582V2.24291ZM6.47184 6.60958H8.45784V7.60691C8.7445 7.03358 9.47784 6.51758 10.5798 6.51758C12.6925 6.51758 13.1932 7.65958 13.1932 9.75491V13.6362H11.0552V10.2322C11.0552 9.03891 10.7685 8.36558 10.0405 8.36558C9.0305 8.36558 8.6105 9.09158 8.6105 10.2322V13.6362H6.47184V6.60958ZM2.80517 13.5449H4.94384V6.51758H2.80517V13.5442V13.5449ZM5.24984 4.22558C5.25387 4.40869 5.22129 4.59077 5.154 4.76112C5.08671 4.93147 4.98607 5.08667 4.85799 5.2176C4.72991 5.34853 4.57697 5.45256 4.40814 5.52358C4.23931 5.59461 4.058 5.63119 3.87484 5.63119C3.69168 5.63119 3.51036 5.59461 3.34153 5.52358C3.17271 5.45256 3.01976 5.34853 2.89168 5.2176C2.7636 5.08667 2.66297 4.93147 2.59568 4.76112C2.52839 4.59077 2.49581 4.40869 2.49984 4.22558C2.50775 3.86615 2.65609 3.52411 2.91309 3.2727C3.17009 3.0213 3.51532 2.88052 3.87484 2.88052C4.23436 2.88052 4.57958 3.0213 4.83658 3.2727C5.09358 3.52411 5.24192 3.86615 5.24984 4.22558Z"
            fill="#FEFEFE"
          />
        </g>
      </svg>
    </Socials>
  );
};
export const Instagram = () => {
  return (
    <Socials href="#">
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ant-design:instagram-filled">
          <path
            id="Vector"
            d="M7.99959 6.26795C6.85271 6.26795 5.91677 7.20388 5.91677 8.35076C5.91677 9.49763 6.85271 10.4336 7.99959 10.4336C9.14646 10.4336 10.0824 9.49763 10.0824 8.35076C10.0824 7.20388 9.14646 6.26795 7.99959 6.26795ZM14.2465 8.35076C14.2465 7.48826 14.2543 6.63357 14.2058 5.77263C14.1574 4.77263 13.9293 3.88513 13.198 3.15388C12.4652 2.42107 11.5793 2.19451 10.5793 2.14607C9.71677 2.09763 8.86209 2.10545 8.00115 2.10545C7.13865 2.10545 6.28396 2.09763 5.42302 2.14607C4.42302 2.19451 3.53552 2.42263 2.80427 3.15388C2.07146 3.8867 1.8449 4.77263 1.79646 5.77263C1.74802 6.63513 1.75584 7.48982 1.75584 8.35076C1.75584 9.2117 1.74802 10.0679 1.79646 10.9289C1.8449 11.9289 2.07302 12.8164 2.80427 13.5476C3.53709 14.2804 4.42302 14.507 5.42302 14.5554C6.28552 14.6039 7.14021 14.5961 8.00115 14.5961C8.86365 14.5961 9.71834 14.6039 10.5793 14.5554C11.5793 14.507 12.4668 14.2789 13.198 13.5476C13.9308 12.8148 14.1574 11.9289 14.2058 10.9289C14.2558 10.0679 14.2465 9.21326 14.2465 8.35076ZM7.99959 11.5554C6.22615 11.5554 4.7949 10.1242 4.7949 8.35076C4.7949 6.57732 6.22615 5.14607 7.99959 5.14607C9.77302 5.14607 11.2043 6.57732 11.2043 8.35076C11.2043 10.1242 9.77302 11.5554 7.99959 11.5554ZM11.3355 5.76326C10.9215 5.76326 10.5871 5.42888 10.5871 5.01482C10.5871 4.60076 10.9215 4.26638 11.3355 4.26638C11.7496 4.26638 12.084 4.60076 12.084 5.01482C12.0841 5.11314 12.0648 5.21052 12.0272 5.30138C11.9897 5.39224 11.9345 5.4748 11.865 5.54432C11.7955 5.61384 11.7129 5.66897 11.6221 5.70654C11.5312 5.74411 11.4338 5.76338 11.3355 5.76326Z"
            fill="#FEFEFE"
          />
        </g>
      </svg>
    </Socials>
  );
};
export const Twitter = () => {
  return (
    <Socials href="#">
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ant-design:twitter-outlined">
          <path
            id="Vector"
            d="M14.4986 4.32403C14.0205 4.53028 13.5002 4.67872 12.9643 4.73653C13.5207 4.40596 13.9374 3.88372 14.1361 3.26778C13.614 3.57839 13.042 3.79619 12.4455 3.91153C12.1962 3.64501 11.8947 3.43269 11.5597 3.28779C11.2248 3.1429 10.8636 3.06854 10.4986 3.06934C9.02207 3.06934 7.83457 4.26622 7.83457 5.73497C7.83457 5.94122 7.85957 6.14747 7.90019 6.34591C5.68926 6.23028 3.71738 5.17403 2.40645 3.55684C2.16758 3.96484 2.0424 4.42938 2.04395 4.90215C2.04395 5.82715 2.51426 6.64278 3.23144 7.12247C2.8088 7.10582 2.39604 6.98965 2.02676 6.78341V6.81622C2.02676 8.11153 2.94238 9.18497 4.1627 9.43184C3.93357 9.49136 3.69786 9.52181 3.46113 9.52247C3.2877 9.52247 3.12363 9.50528 2.95801 9.48184C3.29551 10.5381 4.27832 11.3053 5.44863 11.3303C4.53301 12.0475 3.38613 12.4693 2.14082 12.4693C1.91738 12.4693 1.71113 12.4615 1.49707 12.4365C2.67832 13.1943 4.07988 13.6318 5.58926 13.6318C10.4893 13.6318 13.1705 9.57247 13.1705 6.04903C13.1705 5.93341 13.1705 5.81778 13.1627 5.70215C13.6814 5.32247 14.1361 4.85215 14.4986 4.32403Z"
            fill="#FEFEFE"
          />
        </g>
      </svg>
    </Socials>
  );
};
export const ColorInstagram = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8261 0H24.4101L26.0983 0.0344531L27.4764 0.0689061L28.1999 0.103359C30.336 0.206718 31.783 0.551249 33.0233 1.03359C34.3326 1.55039 35.4351 2.23945 36.572 3.34195C37.6745 4.44444 38.3636 5.5814 38.8804 6.89061C39.3282 8.02756 39.6383 9.30233 39.7761 11.0594L39.8795 12.9543L39.9139 14.7459L39.9484 18.1568V24.565L39.9139 26.5633L39.845 28.2171C39.7417 30.3531 39.3972 31.8002 38.9148 33.0749C38.398 34.3842 37.709 35.4867 36.6065 36.6236C35.504 37.7261 34.4015 38.4152 33.0578 38.932C31.9208 39.3798 30.6461 39.6899 28.889 39.8277L26.7529 39.9311L24.858 39.9655L21.7916 40H15.3834L13.3851 39.9655L11.7313 39.8966C9.59526 39.7933 8.14823 39.4488 6.90792 38.9664C5.5987 38.4496 4.4962 37.7606 3.35925 36.6581C2.25675 35.5556 1.56769 34.4186 1.0509 33.1094C0.603007 31.9724 0.292929 30.6977 0.155117 28.9406L0.0862109 27.528L0.0517578 26.1499L0.0517578 24.3583V21.1886V15.5039L0.0862109 13.8157L0.120664 12.4376L0.155117 11.714C0.258476 9.6124 0.603007 8.16537 1.08535 6.89061C1.60215 5.5814 2.29121 4.4789 3.3937 3.34195C4.4962 2.23945 5.63315 1.55039 6.94237 1.03359C8.07932 0.585702 9.35408 0.275624 11.1112 0.137812L12.5238 0.0689061L13.9019 0.0344531L15.5556 0H18.1396C18.1741 0 21.8261 0 21.8261 0ZM24.3412 3.61757H15.6245L14.1086 3.65202L11.9036 3.72093C11.3524 3.75538 10.8011 3.78984 10.2499 3.85874L9.93979 3.8932C9.73307 3.92765 9.4919 3.9621 9.28518 4.03101L9.04401 4.09991C8.9751 4.13437 8.90619 4.13437 8.83729 4.16882L8.3894 4.30663L8.18268 4.37554C7.25245 4.75452 6.59784 5.16796 5.87433 5.85702C5.18526 6.54608 4.73737 7.23514 4.39284 8.16538L4.28948 8.61326L4.22058 8.81998C4.04831 9.40569 3.87605 10.2326 3.77269 11.3695L3.73824 12.2308L3.66933 14.0224L3.63488 17.0887V24.186L3.66933 26.391L3.73824 28.0103C3.77269 28.596 3.80714 29.1817 3.9105 29.7674L3.94495 30.0431C3.94495 30.0775 3.94495 30.1464 3.97941 30.1809L4.04831 30.4221L4.11722 30.6632C4.11722 30.6977 4.15167 30.7321 4.15167 30.7666L4.22058 30.9733L4.28948 31.18L4.32394 31.2834L4.46175 31.6968C4.80628 32.627 5.25417 33.2817 5.94323 34.0052C6.63229 34.6942 7.32135 35.1421 8.25159 35.4866L8.66502 35.6245L8.83729 35.6934L8.94065 35.7278L9.14737 35.7967C9.18182 35.7967 9.21627 35.8312 9.25073 35.8312L9.4919 35.9001L9.73307 35.969L10.0087 36.0034C10.5255 36.1068 11.1456 36.1757 11.9036 36.2102L14.3498 36.3135L17.5884 36.348H24.6168L26.4083 36.3135L28.0276 36.2446C28.7856 36.2102 29.4058 36.1413 29.9226 36.0379L30.1982 36.0034L30.4394 35.9345L30.715 35.8312L30.8183 35.7967L31.0251 35.7278L31.2318 35.6589L31.3351 35.6245L31.7486 35.4866C32.6788 35.1421 33.3334 34.6942 34.0569 34.0052C34.746 33.3161 35.1939 32.627 35.5384 31.6968L35.6762 31.2834C35.8829 30.6632 36.0897 29.8019 36.193 28.4927L36.2964 26.391L36.3308 24.255V21.1886V15.6417L36.2964 13.5056L36.2275 11.8863C36.193 11.404 36.1586 10.8872 36.0897 10.4048L36.0552 10.0947C36.0208 9.95693 36.0208 9.81912 35.9863 9.68131L35.9174 9.44014C35.8829 9.37123 35.8829 9.26787 35.8485 9.19897L35.7796 8.99225L35.7451 8.88889L35.5729 8.33764L35.5384 8.23428C35.1594 7.30405 34.746 6.64944 34.0569 5.92593C33.3679 5.20241 32.6788 4.78897 31.7486 4.44444L31.5419 4.37554L31.094 4.23773L30.9906 4.13437L30.715 4.06546C30.1637 3.92765 29.4747 3.78984 28.5444 3.72093L27.063 3.65202L25.8571 3.61757H24.3412Z"
        fill="url(#paint0_linear_1110_79039)"
      />
      <path
        d="M20.0001 9.71567C25.6504 9.71567 30.2327 14.2979 30.2327 19.9482C30.2327 25.5985 25.6504 30.1808 20.0001 30.1808C14.3498 30.1808 9.76758 25.5985 9.76758 19.9482C9.76758 14.2979 14.3498 9.71567 20.0001 9.71567ZM20.0001 13.2988C16.3137 13.2988 13.3507 16.2618 13.3507 19.9482C13.3507 23.6347 16.3137 26.5977 20.0001 26.5977C23.6866 26.5977 26.6496 23.6347 26.6496 19.9482C26.6496 16.2618 23.6522 13.2988 20.0001 13.2988ZM33.0234 9.30224C33.0578 10.6115 32.0243 11.7139 30.715 11.7484C29.4058 11.7829 28.3033 10.7493 28.2689 9.44005C28.2689 9.40559 28.2689 9.33669 28.2689 9.30224C28.3033 7.99302 29.4058 6.92497 30.715 6.99388C31.9898 6.99388 32.9889 8.02747 33.0234 9.30224Z"
        fill="url(#paint1_linear_1110_79039)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1110_79039"
          x1="8.11197"
          y1="40.1147"
          x2="31.6282"
          y2="0.225725"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDD074" />
          <stop offset="0.25" stopColor="#F77F34" />
          <stop offset="0.5" stopColor="#DD326E" />
          <stop offset="0.75" stopColor="#D82B7E" />
          <stop offset="1" stopColor="#A432B1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1110_79039"
          x1="14.0182"
          y1="30.0624"
          x2="27.6849"
          y2="6.81361"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDD074" />
          <stop offset="0.25" stopColor="#F77F34" />
          <stop offset="0.5" stopColor="#DD326E" />
          <stop offset="0.75" stopColor="#D82B7E" />
          <stop offset="1" stopColor="#A432B1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ColorTwitter = () => {
  return (
    <svg
      width="41"
      height="34"
      viewBox="0 0 41 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Logo_1_">
        <path
          id="white_background"
          d="M36.4049 8.8244C36.4293 9.17772 36.4293 9.53103 36.4293 9.8876C36.4293 20.7524 28.1742 33.2829 13.0793 33.2829V33.2764C8.62025 33.2829 4.25381 32.0031 0.5 29.5902C1.14839 29.6683 1.80002 29.7074 2.45328 29.709C6.14859 29.7123 9.73827 28.47 12.6454 26.1824C9.13376 26.1156 6.05434 23.8215 4.97857 20.4724C6.20871 20.7101 7.47623 20.6612 8.68363 20.3307C4.85507 19.5557 2.10065 16.1854 2.10065 12.2713C2.10065 12.2354 2.10065 12.2012 2.10065 12.1671C3.24142 12.8037 4.51869 13.157 5.82521 13.1961C2.21928 10.7815 1.10776 5.9751 3.28529 2.21726C7.45186 7.35416 13.5993 10.477 20.1986 10.8075C19.5372 7.9517 20.4407 4.95911 22.5727 2.95157C25.878 -0.161503 31.0765 -0.00194165 34.1835 3.30814C36.0214 2.94506 37.783 2.26936 39.395 1.312C38.7823 3.21534 37.5002 4.83212 35.7874 5.85949C37.4141 5.66737 39.0034 5.23102 40.5 4.56509C39.3982 6.21932 38.0105 7.66026 36.4049 8.8244Z"
          fill="#1D9BF0"
        />
      </g>
    </svg>
  );
};

export interface ISvg {
  svg: string;
}
export const ContactSvg: FunctionComponent<ISvg> = ({ svg }) => {
  return (
    <ContactSvgStyle>
      {svg === "email" && (
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          animate={{
            y: ["2px", "0px", "-3px", "3px"],
          }}
        >
          <g id="vuesax/bold/sms">
            <g id="vuesax/bold/sms_2">
              <g id="sms">
                <path
                  id="Vector"
                  d="M28.3335 5.83331H11.6668C6.66683 5.83331 3.3335 8.33331 3.3335 14.1666V25.8333C3.3335 31.6666 6.66683 34.1666 11.6668 34.1666H28.3335C33.3335 34.1666 36.6668 31.6666 36.6668 25.8333V14.1666C36.6668 8.33331 33.3335 5.83331 28.3335 5.83331ZM29.1168 15.9833L23.9002 20.15C22.8002 21.0333 21.4002 21.4666 20.0002 21.4666C18.6002 21.4666 17.1835 21.0333 16.1002 20.15L10.8835 15.9833C10.3502 15.55 10.2668 14.75 10.6835 14.2166C11.1168 13.6833 11.9002 13.5833 12.4335 14.0166L17.6502 18.1833C18.9168 19.2 21.0668 19.2 22.3335 18.1833L27.5502 14.0166C28.0835 13.5833 28.8835 13.6666 29.3002 14.2166C29.7335 14.75 29.6502 15.55 29.1168 15.9833Z"
                  fill="#181818"
                />
              </g>
            </g>
          </g>
        </motion.svg>
      )}
      {svg === "phone" && (
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          animate={{
            y: ["2px", "0px", "-3px", "3px"],
          }}
        >
          <g id="vuesax/bold/call">
            <g id="vuesax/bold/call_2">
              <g id="call">
                <path
                  id="Vector"
                  d="M18.4163 24.9166L15.333 28C14.683 28.65 13.6497 28.65 12.983 28.0166C12.7997 27.8333 12.6163 27.6666 12.433 27.4833C10.7163 25.75 9.16634 23.9333 7.78301 22.0333C6.41634 20.1333 5.31634 18.2333 4.51634 16.35C3.73301 14.45 3.33301 12.6333 3.33301 10.9C3.33301 9.76665 3.53301 8.68331 3.93301 7.68331C4.33301 6.66665 4.96634 5.73331 5.84967 4.89998C6.91634 3.84998 8.08301 3.33331 9.31634 3.33331C9.78301 3.33331 10.2497 3.43331 10.6663 3.63331C11.0997 3.83331 11.483 4.13331 11.783 4.56665L15.6497 10.0166C15.9497 10.4333 16.1663 10.8166 16.3163 11.1833C16.4663 11.5333 16.5497 11.8833 16.5497 12.2C16.5497 12.6 16.433 13 16.1997 13.3833C15.983 13.7666 15.6663 14.1666 15.2663 14.5666L13.9997 15.8833C13.8163 16.0666 13.733 16.2833 13.733 16.55C13.733 16.6833 13.7497 16.8 13.783 16.9333C13.833 17.0666 13.883 17.1666 13.9163 17.2666C14.2163 17.8166 14.733 18.5333 15.4663 19.4C16.2163 20.2666 17.0163 21.15 17.883 22.0333C18.0497 22.2 18.233 22.3666 18.3997 22.5333C19.0663 23.1833 19.083 24.25 18.4163 24.9166Z"
                  fill="#181818"
                />
                <path
                  id="Vector_2"
                  d="M36.6167 30.55C36.6167 31.0167 36.5333 31.5 36.3667 31.9667C36.3167 32.1 36.2667 32.2334 36.2 32.3667C35.9167 32.9667 35.55 33.5334 35.0667 34.0667C34.25 34.9667 33.35 35.6167 32.3333 36.0334C32.3167 36.0334 32.3 36.05 32.2833 36.05C31.3 36.45 30.2333 36.6667 29.0833 36.6667C27.3833 36.6667 25.5667 36.2667 23.65 35.45C21.7333 34.6334 19.8167 33.5334 17.9167 32.15C17.2667 31.6667 16.6167 31.1834 16 30.6667L21.45 25.2167C21.9167 25.5667 22.3333 25.8334 22.6833 26.0167C22.7667 26.05 22.8667 26.1 22.9833 26.15C23.1167 26.2 23.25 26.2167 23.4 26.2167C23.6833 26.2167 23.9 26.1167 24.0833 25.9334L25.35 24.6834C25.7667 24.2667 26.1667 23.95 26.55 23.75C26.9333 23.5167 27.3167 23.4 27.7333 23.4C28.05 23.4 28.3833 23.4667 28.75 23.6167C29.1167 23.7667 29.5 23.9834 29.9167 24.2667L35.4333 28.1834C35.8667 28.4834 36.1667 28.8334 36.35 29.25C36.5167 29.6667 36.6167 30.0834 36.6167 30.55Z"
                  fill="#181818"
                />
              </g>
            </g>
          </g>
        </motion.svg>
      )}
      {svg === "location" && (
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          animate={{
            y: ["2px", "0px", "-3px", "3px"],
          }}
        >
          <path
            d="M34.3668 14.0834C32.6168 6.38335 25.9002 2.91669 20.0002 2.91669C20.0002 2.91669 20.0002 2.91669 19.9835 2.91669C14.1002 2.91669 7.36683 6.36669 5.61683 14.0667C3.66683 22.6667 8.93349 29.95 13.7002 34.5333C15.4668 36.2333 17.7335 37.0834 20.0002 37.0834C22.2668 37.0834 24.5335 36.2333 26.2835 34.5333C31.0502 29.95 36.3168 22.6834 34.3668 14.0834ZM20.0002 22.4334C17.1002 22.4334 14.7502 20.0834 14.7502 17.1834C14.7502 14.2834 17.1002 11.9334 20.0002 11.9334C22.9002 11.9334 25.2502 14.2834 25.2502 17.1834C25.2502 20.0834 22.9002 22.4334 20.0002 22.4334Z"
            fill="#181818"
          />
        </motion.svg>
      )}
    </ContactSvgStyle>
  );
};

export const Checked: FunctionComponent = () => {
  return (
    <SmallsvgStyles>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
      </svg>
    </SmallsvgStyles>
  );
};
export const Error: FunctionComponent = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icons">
        <path
          id="Vector"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#D92D20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M15 9L9 15"
          stroke="#D92D20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M9 9L15 15"
          stroke="#D92D20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const ArrowRight = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/linear/arrow-right">
        <g id="vuesax/linear/arrow-right_2">
          <g id="arrow-right">
            <path
              id="Vector"
              d="M5.94 13.28L10.2867 8.93333C10.8 8.42 10.8 7.58 10.2867 7.06667L5.94 2.72"
              stroke="#979797"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Clock = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/linear/clock">
        <g id="vuesax/linear/clock_2">
          <g id="clock">
            <path
              id="Vector"
              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
              stroke="#525252"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51"
              stroke="#525252"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export const VisaCard = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="20"
      viewBox="0 0 33 20"
      fill="none"
    >
      <path
        d="M11.7207 2.1235H20.4079V17.7329H11.7207V2.1235Z"
        fill="#FF5F00"
      />
      <path
        d="M12.2725 9.92827C12.2725 6.75678 13.7617 3.94372 16.0506 2.12349C14.3685 0.799749 12.245 0 9.92839 0C4.44008 0 0 4.44008 0 9.92827C0 15.4163 4.44008 19.8565 9.92827 19.8565C12.2448 19.8565 14.3683 19.0568 16.0506 17.7329C13.7617 15.9403 12.2725 13.0997 12.2725 9.92827Z"
        fill="#EB001B"
      />
      <path
        d="M32.1288 9.92827C32.1288 15.4163 27.6887 19.8565 22.2005 19.8565C19.8839 19.8565 17.7604 19.0568 16.0781 17.7329C18.3947 15.9128 19.8564 13.0997 19.8564 9.92827C19.8564 6.75678 18.3671 3.94372 16.0781 2.12349C17.7603 0.799749 19.8839 0 22.2005 0C27.6887 0 32.1289 4.46771 32.1289 9.92827H32.1288Z"
        fill="#F79E1B"
      />
    </svg>
  );
};

export const Paypal = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
    >
      <path
        d="M5.31553 19.3219L5.66215 17.1203L4.89004 17.1024H1.20312L3.76533 0.856269C3.77329 0.807225 3.79914 0.761494 3.83692 0.729019C3.8747 0.696544 3.92307 0.67865 3.97345 0.67865H10.1901C12.2539 0.67865 13.6782 1.10812 14.4217 1.95578C14.7703 2.35343 14.9924 2.76898 15.0998 3.22629C15.2124 3.70612 15.2145 4.2794 15.1044 4.97861L15.0965 5.02965V5.47766L15.4451 5.67516C15.7387 5.83091 15.972 6.00919 16.1509 6.21333C16.4492 6.55332 16.642 6.98544 16.7235 7.49775C16.8077 8.02464 16.7799 8.65161 16.642 9.36141C16.483 10.1779 16.2258 10.8891 15.8785 11.471C15.5591 12.0072 15.1522 12.4519 14.669 12.7965C14.2077 13.1239 13.6596 13.3724 13.04 13.5315C12.4395 13.6879 11.7549 13.7668 11.004 13.7668H10.5202C10.1742 13.7668 9.83818 13.8914 9.5744 14.1147C9.30996 14.3426 9.135 14.6542 9.08131 14.9949L9.04486 15.1931L8.43247 19.0735L8.40464 19.216C8.39735 19.261 8.38475 19.2836 8.3662 19.2987C8.34963 19.3126 8.32577 19.3219 8.30257 19.3219H5.31553Z"
        fill="#253B80"
      />
      <path
        d="M15.7749 5.08136C15.7563 5.2 15.7352 5.32128 15.7113 5.44587C14.8914 9.65504 12.0867 11.1091 8.50449 11.1091H6.68059C6.2425 11.1091 5.87335 11.4272 5.80509 11.8594L4.87125 17.7818L4.60682 19.4606C4.5624 19.7442 4.78111 20 5.06743 20H8.30235C8.68542 20 9.01083 19.7217 9.07114 19.3439L9.10296 19.1795L9.71203 15.3143L9.75113 15.1022C9.81078 14.7232 10.1368 14.4447 10.5199 14.4447H11.0037C14.1379 14.4447 16.5914 13.1723 17.3085 9.49001C17.6081 7.95176 17.453 6.66733 16.6603 5.764C16.4205 5.49161 16.1228 5.26561 15.7749 5.08136Z"
        fill="#179BD7"
      />
      <path
        d="M14.9174 4.73933C14.7921 4.70289 14.663 4.66975 14.5303 4.63993C14.3971 4.61076 14.2606 4.58492 14.1201 4.56239C13.6284 4.48285 13.0895 4.44507 12.5123 4.44507H7.63969C7.51973 4.44507 7.40573 4.47225 7.30366 4.52129C7.07899 4.62932 6.91198 4.84207 6.87155 5.10253L5.835 11.6678L5.80518 11.8593C5.87344 11.4272 6.24259 11.1091 6.68068 11.1091H8.50458C12.0868 11.1091 14.8916 9.65433 15.7114 5.44583C15.7359 5.32123 15.7564 5.19996 15.775 5.08132C15.5675 4.9713 15.343 4.87719 15.101 4.797C15.0413 4.77711 14.9798 4.7579 14.9174 4.73933Z"
        fill="#222D65"
      />
      <path
        d="M6.87174 5.10256C6.91217 4.8421 7.07918 4.62935 7.30385 4.52199C7.40658 4.47294 7.5199 4.44576 7.63986 4.44576H12.5125C13.0897 4.44576 13.6285 4.48354 14.1203 4.56308C14.2608 4.58561 14.3974 4.61146 14.5306 4.64062C14.6631 4.67044 14.7924 4.70358 14.9176 4.74003C14.9799 4.7586 15.0415 4.77781 15.1018 4.79703C15.3438 4.87722 15.5685 4.972 15.7758 5.08135C16.0197 3.52586 15.7739 2.46678 14.9328 1.50776C14.0056 0.452 12.3322 0 10.1908 0H3.97417C3.53674 0 3.16361 0.318124 3.09601 0.750903L0.50662 17.164C0.455588 17.4888 0.70611 17.7818 1.03351 17.7818H4.87153L5.83518 11.6678L6.87174 5.10256Z"
        fill="#253B80"
      />
    </svg>
  );
};

export const LoadingDone = () => {
  return (
    <svg
      width="162"
      height="161"
      viewBox="0 0 162 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Loading">
        <path
          id="Ellipse 3"
          d="M155.335 80.2577C155.335 90.0195 153.412 99.6857 149.676 108.704C145.94 117.723 140.465 125.918 133.562 132.82C126.66 139.723 118.465 145.198 109.447 148.934C100.428 152.67 90.7617 154.592 80.9999 154.592C71.2381 154.592 61.572 152.67 52.5533 148.934C43.5346 145.198 35.34 139.723 28.4374 132.82C21.5348 125.918 16.0593 117.723 12.3237 108.704C8.58799 99.6857 6.66527 90.0195 6.66527 80.2577C6.66527 70.4959 8.58799 60.8298 12.3237 51.8111C16.0593 42.7924 21.5348 34.5978 28.4374 27.6952C35.34 20.7926 43.5346 15.3171 52.5533 11.5815C61.572 7.8458 71.2382 5.92308 80.9999 5.92308C90.7617 5.92308 100.428 7.8458 109.447 11.5815C118.465 15.3171 126.66 20.7926 133.562 27.6952C140.465 34.5978 145.941 42.7924 149.676 51.8111C153.412 60.8298 155.335 70.496 155.335 80.2577L155.335 80.2577Z"
          stroke="url(#paint0_angular_1253_71255)"
          strokeWidth="11.8462"
          strokeLinecap="round"
        />
        <g id="Vector">
          <mask id="path-2-inside-1_1253_71255" fill="white">
            <path d="M70.2917 110.721C69.6004 110.719 68.917 110.575 68.2838 110.297C67.6507 110.019 67.0814 109.615 66.6113 109.108L42.1088 83.0424C41.1929 82.0662 40.7022 80.7663 40.7447 79.4284C40.7873 78.0905 41.3596 76.8243 42.3357 75.9084C43.3118 74.9925 44.6118 74.5018 45.9496 74.5443C47.2875 74.5869 48.5537 75.1592 49.4696 76.1353L70.2413 98.2682L112.642 51.8849C113.072 51.349 113.607 50.9068 114.215 50.5854C114.822 50.264 115.489 50.0702 116.174 50.0158C116.859 49.9614 117.548 50.0477 118.198 50.2693C118.849 50.4908 119.447 50.8431 119.957 51.3043C120.466 51.7655 120.876 52.326 121.161 52.9514C121.446 53.5767 121.6 54.2537 121.613 54.9408C121.627 55.6279 121.5 56.3105 121.241 56.9467C120.981 57.583 120.594 58.1594 120.103 58.6407L74.0225 109.057C73.5569 109.573 72.9896 109.988 72.3562 110.274C71.7229 110.56 71.0371 110.712 70.3421 110.721H70.2917Z" />
          </mask>
          <path
            d="M70.2917 110.721L70.2563 121.721L70.274 121.721H70.2917V110.721ZM66.6113 109.108L74.6767 101.628L74.6515 101.601L74.626 101.574L66.6113 109.108ZM42.1088 83.0424L34.0873 90.5694L34.094 90.5765L42.1088 83.0424ZM49.4696 76.1353L41.4481 83.6623L41.4487 83.6629L49.4696 76.1353ZM70.2413 98.2682L62.2204 105.796L70.3474 114.455L78.3602 105.69L70.2413 98.2682ZM112.642 51.8849L120.761 59.3066L120.998 59.0469L121.218 58.7724L112.642 51.8849ZM120.103 58.6407L112.4 50.7883L112.186 50.9982L111.984 51.2195L120.103 58.6407ZM74.0225 109.057L65.9031 101.636L65.8794 101.662L65.8558 101.688L74.0225 109.057ZM70.3421 110.721V121.721H70.4105L70.4789 121.72L70.3421 110.721ZM70.3271 99.7212C71.1441 99.7238 71.9518 99.8944 72.7001 100.222L63.8676 120.372C65.8821 121.255 68.0567 121.714 70.2563 121.721L70.3271 99.7212ZM72.7001 100.222C73.4483 100.55 74.1211 101.029 74.6767 101.628L58.5459 116.588C60.0416 118.201 61.8531 119.488 63.8676 120.372L72.7001 100.222ZM74.626 101.574L50.1235 75.5082L34.094 90.5765L58.5965 116.642L74.626 101.574ZM50.1303 75.5153C51.2106 76.6667 51.7894 78.2 51.7392 79.778L29.7503 79.0787C29.615 83.3325 31.1751 87.4658 34.0873 90.5694L50.1303 75.5153ZM51.7392 79.778C51.689 81.3561 51.014 82.8495 49.8627 83.9299L34.8087 67.8869C31.7051 70.7991 29.8856 74.825 29.7503 79.0787L51.7392 79.778ZM49.8627 83.9299C48.7114 85.0102 47.178 85.589 45.6 85.5388L46.2993 63.5499C42.0455 63.4146 37.9122 64.9747 34.8087 67.8869L49.8627 83.9299ZM45.6 85.5388C44.0219 85.4886 42.5285 84.8136 41.4481 83.6623L57.4911 68.6083C54.5789 65.5047 50.5531 63.6852 46.2993 63.5499L45.6 85.5388ZM41.4487 83.6629L62.2204 105.796L78.2622 90.7406L57.4905 68.6077L41.4487 83.6629ZM78.3602 105.69L120.761 59.3066L104.523 44.4631L62.1224 90.8464L78.3602 105.69ZM121.218 58.7724C120.71 59.4057 120.077 59.9283 119.36 60.3081L109.07 40.8627C107.137 41.8854 105.434 43.2924 104.065 44.9973L121.218 58.7724ZM119.36 60.3081C118.642 60.688 117.854 60.9171 117.044 60.9813L115.304 39.0503C113.124 39.2233 111.003 39.8401 109.07 40.8627L119.36 60.3081ZM117.044 60.9813C116.235 61.0456 115.42 60.9436 114.652 60.6818L121.745 39.8567C119.675 39.1517 117.483 38.8773 115.304 39.0503L117.044 60.9813ZM114.652 60.6818C113.883 60.4199 113.176 60.0037 112.574 59.4586L127.34 43.15C125.719 41.6824 123.815 40.5617 121.745 39.8567L114.652 60.6818ZM112.574 59.4586C111.972 58.9135 111.487 58.2511 111.151 57.512L131.171 48.3908C130.264 46.4009 128.96 44.6175 127.34 43.15L112.574 59.4586ZM111.151 57.512C110.814 56.7729 110.632 55.9728 110.616 55.1609L132.611 54.7207C132.567 52.5347 132.077 50.3806 131.171 48.3908L111.151 57.512ZM110.616 55.1609C110.599 54.3489 110.749 53.5421 111.056 52.7902L131.425 61.1033C132.251 59.0789 132.655 56.9069 132.611 54.7207L110.616 55.1609ZM111.056 52.7902C111.363 52.0383 111.82 51.357 112.4 50.7883L127.807 66.4931C129.368 64.9619 130.599 63.1277 131.425 61.1033L111.056 52.7902ZM111.984 51.2195L65.9031 101.636L82.142 116.479L128.223 66.0619L111.984 51.2195ZM65.8558 101.688C66.4061 101.078 67.0766 100.589 67.8251 100.25L76.8874 120.297C78.9026 119.386 80.7077 118.068 82.1893 116.427L65.8558 101.688ZM67.8251 100.25C68.5736 99.9121 69.384 99.7322 70.2054 99.722L70.4789 121.72C72.6903 121.693 74.8721 121.208 76.8874 120.297L67.8251 100.25ZM70.3421 99.7211H70.2917V121.721H70.3421V99.7211Z"
            fill="#7D26CD"
            mask="url(#path-2-inside-1_1253_71255)"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_angular_1253_71255"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(82.3326 85.2923) scale(72.1135)"
        >
          <stop offset="0.251577" stopColor="#7D26CD" />
          <stop offset="1" stopColor="#7D26CD" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const Tick = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
    >
      <path
        d="M5.11539 11.5C4.99572 11.4996 4.87741 11.4734 4.7678 11.4232C4.6582 11.3729 4.55965 11.2996 4.47827 11.2077L0.236577 6.48583C0.0780167 6.309 -0.00692349 6.0735 0.000441987 5.83113C0.00780746 5.58877 0.106875 5.35939 0.275852 5.19346C0.444828 5.02754 0.669872 4.93865 0.901475 4.94636C1.13308 4.95407 1.35227 5.05774 1.51083 5.23456L5.10667 9.24408L12.4467 0.841453C12.5212 0.744387 12.6139 0.664281 12.719 0.606055C12.8242 0.547829 12.9396 0.512713 13.0582 0.502863C13.1768 0.493014 13.296 0.508638 13.4086 0.548778C13.5212 0.588918 13.6248 0.652724 13.713 0.73628C13.8012 0.819835 13.8721 0.921374 13.9215 1.03466C13.9708 1.14795 13.9974 1.27059 13.9998 1.39506C14.0022 1.51952 13.9802 1.64318 13.9353 1.75845C13.8903 1.87371 13.8233 1.97813 13.7384 2.06531L5.76125 11.1986C5.68064 11.2921 5.58243 11.3671 5.47279 11.419C5.36315 11.4709 5.24444 11.4984 5.12412 11.5H5.11539Z"
        fill="#7D26CD"
      />
    </svg>
  );
};

export const Dollar = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
      <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
    </svg>
  );
};
