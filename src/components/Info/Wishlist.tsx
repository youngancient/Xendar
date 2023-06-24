import { Addtowishlist, WishlistStyles } from "@/styles/HeroStyles/Info";
import React, { FunctionComponent, useState } from "react";
import WishlistItem from "./WishlistItem";
import { useAppDispatch } from "@/redux/hook";
import { showWishlist } from "@/redux/dataSlice";

const exchangeRate: number = 750;

export const convertToNaira = (dollar: number) => {
  return Math.round(exchangeRate * dollar);
};

const Wishlist: FunctionComponent = () => {
  // use redux for this
//   add an overflow-scroll to the component
// aint done with this ooo
  const [wishlistNotEmpty, setWishlistNotEmpty] = useState(false);
  //   have a function which converts dollar to naira
  const [wishList, setWishlist] = useState([
    {
      id: 1,
      name: "UI/UX Design",
      img: "/assets/ui_ux_design.png",
      dollarPrice: 245.99,
      nairaPrice: convertToNaira(245.99),
      level: "beginner",
    },
    {
      id: 2,
      name: "Frontend Engineering",
      img: "/assets/fe_engr.png",
      dollarPrice: 305.99,
      nairaPrice: convertToNaira(245.99),
      level: "expert",
    },
    {
      id: 3,
      name: "Backend Engineering",
      img: "/assets/fe_engr.png",
      dollarPrice: 400.99,
      nairaPrice: convertToNaira(245.99),
      level: "intermediate",
    },
  ]);
  const dispatch = useAppDispatch();
  const handleMouseLeave =()=>{
    dispatch(showWishlist(false));
  }
  const handleMouseOver =()=>{
    dispatch(showWishlist(true));
  }
  return (
    <WishlistStyles onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} >
      {wishlistNotEmpty ? (
        <div className="wishlist">
          {wishList.map((ele) => (
            <WishlistItem
              key={ele.id}
              name={ele.name}
              level={ele.level}
              dollarPrice={ele.dollarPrice}
              nairaPrice={ele.nairaPrice}
              img={ele.img}
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
