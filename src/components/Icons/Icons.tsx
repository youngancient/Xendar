import { removeFromFavorite, showWishlist } from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { DesktopMobile } from "@/styles/HeroStyles/Hero";
import { TrashContStyle } from "@/styles/HeroStyles/Info";
import {
  HeroMagnifyingGlassStyle,
  IMenu,
  IconStyle,
  MenuStyle,
  NavMagnifyingGlassStyle,
} from "@/styles/IconsStyles/icons";
import React, { FunctionComponent } from "react";

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
  return (
    <IconStyle>
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
        <h6>1</h6>
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.99922 5.50742C9.99922 7.83844 8.40381 9.79683 6.24536 10.3502V13.3371C6.99541 13.7685 7.50045 14.5779 7.50045 15.5053C7.50045 16.8858 6.38135 18.0049 5.00088 18.0049C3.62041 18.0049 2.50132 16.8858 2.50132 15.5053C2.50132 14.5823 3.0016 13.7762 3.7458 13.3432V10.3479C1.59194 9.79136 0.000976562 7.83519 0.000976562 5.50742C0.000976562 2.74648 2.23916 0.508301 5.0001 0.508301C7.76104 0.508301 9.99922 2.74648 9.99922 5.50742Z"
        fill="#7D26CD"
      />
    </svg>
  );
};
