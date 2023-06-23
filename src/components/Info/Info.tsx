import { InfoStyles } from "@/styles/HeroStyles/Info";
import MobileNav from "../MobileNav/MobileNav";
import React, { FunctionComponent, useState } from "react";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { AnimatePresence } from "framer-motion";

const Info: FunctionComponent = () => {
  const { isNavOpen } = useAppSelector((state: RootState) => state.data);
  const toggleMenu = () => {
    console.log(isNavOpen);
  };
  return (
    <InfoStyles>
      <h3>80% discount on all courses when you use a discount code.</h3>
      <div className="mobile">
        <AnimatePresence>{isNavOpen && <MobileNav />}</AnimatePresence>
      </div>
    </InfoStyles>
  );
};

export default Info;
