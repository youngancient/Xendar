import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { MobileNavStyles } from "@/styles/HeaderStyles/MobileNav";
import { SideMenuButtonStyle } from "@/styles/HeaderStyles/SideMenuButton";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { slidevariants } from "../Animations/LandingPageVariants";


// setIsNavOpen: Dispatch<SetStateAction<boolean>>;
const MobileNav:FunctionComponent= () => {
  return (
    <MobileNavStyles animate="final">
      <div className="nothing"></div>
      <motion.div className="sidemenu"
      variants={slidevariants}
      initial = "initial"
      animate = "final"
      exit= "exit"
      key= "hinokami"
      >
        <div className="one">
          <div className="avatar">
            <Image
              src={"/assets/nav_avatar.png"}
              alt={"nav avatar"}
              width={40}
              height={40}
            />
            <h5>Hi, Micheal!</h5>
          </div>
          <div className="sidemenu-links">
            <Link href={"/courses"}>
              <LinkStyle color="var(--grey-500, #525252)">Courses</LinkStyle>
            </Link>
            <Link href={"/about"}>
              <LinkStyle color="var(--grey-500, #525252)">About Us</LinkStyle>
            </Link>
            <Link href={"/contact"}>
              <LinkStyle color="var(--grey-500, #525252)">Contact Us</LinkStyle>
            </Link>
          </div>
          <div className="sidemenu-links">
            <SideMenuButtonStyle>
              <p>Wishlist</p>
              <div className="count">
                <span>1</span>
              </div>
            </SideMenuButtonStyle>
            <SideMenuButtonStyle>
              <p>Notification</p>
              <div className="count">
                <span>1</span>
              </div>
            </SideMenuButtonStyle>
            <Link href={"#"}>
              <LinkStyle color="var(--grey-500, #525252)">Profile</LinkStyle>
            </Link>
          </div>
        </div>
        <div className="two">
        <Link href={"#"}>
              <LinkStyle color="var(--red, #D92D20)">Logout</LinkStyle>
            </Link>
        </div>
      </motion.div>
    </MobileNavStyles>
  );
};

export default MobileNav;
