import { showWishlist } from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
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
        <h6>1</h6>
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

export const Trash: FunctionComponent = () => {
  return (
    <TrashContStyle>
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M7.08301 4.14167L7.26634 3.05C7.39967 2.25833 7.49967 1.66667 8.90801 1.66667H11.0913C12.4997 1.66667 12.608 2.29167 12.733 3.05833L12.9163 4.14167"
                stroke="#E6736A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M15.7087 7.61667L15.167 16.0083C15.0753 17.3167 15.0003 18.3333 12.6753 18.3333H7.32533C5.00033 18.3333 4.92533 17.3167 4.83366 16.0083L4.29199 7.61667"
                stroke="#E6736A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M8.6084 13.75H11.3834"
                stroke="#E6736A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_5"
                d="M7.91699 10.4167H12.0837"
                stroke="#E6736A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </TrashContStyle>
  );
};
