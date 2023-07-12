import { InfoStyles } from "@/styles/HeroStyles/Info";
import MobileNav from "../MobileNav/MobileNav";
import React, { FunctionComponent, useState } from "react";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { AnimatePresence } from "framer-motion";
import Wishlist from "./Wishlist";
import { NotificationList } from "./Notifications";

const Info: FunctionComponent = () => {
  const { isNavOpen, isWishlistOpen, isNotificationOpen } = useAppSelector((state: RootState) => state.data);
  
  return (
    <InfoStyles>
      <h3>80% discount on all courses when you use a discount code.</h3>
      <div className="mobile">
        <AnimatePresence>{isNavOpen && <MobileNav />}</AnimatePresence>
      </div>
      <div className="desktop">
        {/* add animation to this component */}
        <AnimatePresence>
          {isWishlistOpen && <Wishlist />}
        </AnimatePresence>
        <AnimatePresence>
          {isNotificationOpen && <NotificationList />}
        </AnimatePresence>
      </div>
    </InfoStyles>
  );
};

export default Info;
