import { Addtowishlist, WishlistStyles } from "@/styles/HeroStyles/Info";
import React, { FunctionComponent, useEffect, useState } from "react";
import WishlistItem from "./WishlistItem";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { showWishlist } from "@/redux/dataSlice";
import { RootState } from "@/redux/store";
import { ICourse } from "../CourseCard/CourseCard";

//   A function which converts dollar to naira based on the exchange rate
const exchangeRate: number = 750;
export const convertToNaira = (dollar: number) => {
  return Math.round(exchangeRate * dollar);
};

const Wishlist: FunctionComponent = () => {
  const { allCourses } = useAppSelector((state: RootState) => state.data);
  const [wishList, setWishlist] = useState<ICourse[]>([]);
  useEffect(() => {
    const favourite = allCourses.filter((ele) => ele.isLoved === true);
    setWishlist(favourite);
  }, [allCourses]);
  const dispatch = useAppDispatch();
  const handleMouseLeave = () => {
    dispatch(showWishlist(false));
  };
  const handleMouseOver = () => {
    dispatch(showWishlist(true));
  };
  return (
    <WishlistStyles
      length={wishList.length}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    >
      {wishList.length > 0 ? (
        <div className="wishlist">
          {wishList.map((ele, index) => (
            <WishlistItem
              key={index}
              name={ele.name}
              level={ele.level}
              dollarPrice={ele.dollarPrice}
              nairaPrice={convertToNaira(ele.dollarPrice)}
              img={ele.img}
              isEndOfList={wishList.length === index + 1}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>Your wishlist is empty</p>
          <Addtowishlist>Add to Wishlist</Addtowishlist>
        </div>
      )}
    </WishlistStyles>
  );
};

export default Wishlist;
