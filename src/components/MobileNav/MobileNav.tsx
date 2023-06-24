import { MobileNavStyles } from "@/styles/HeaderStyles/MobileNav";
import { SideMenuButtonStyle } from "@/styles/HeaderStyles/SideMenuButton";
import { PageLinkStyle } from "@/styles/LinkStyles/Link";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { slidevariants } from "../../Animations/LandingPageVariants";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { closeNav } from "@/redux/dataSlice";
import { useRouter } from "next/router";


// setIsNavOpen: Dispatch<SetStateAction<boolean>>;
const MobileNav:FunctionComponent= () => {
  const dispatch = useAppDispatch();
  const toggleMenu =()=>{
    dispatch(closeNav());
  }
  const router = useRouter();
  return (
    <MobileNavStyles>
      <div className="nothing" onClick={toggleMenu}></div>
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
              <PageLinkStyle color="var(--grey-500, #525252)" $ispageactive={router.pathname === "/courses"}>Courses</PageLinkStyle>
            </Link>
            <Link href={"/about"}>
              <PageLinkStyle color="var(--grey-500, #525252)" $ispageactive={router.pathname === "/about"}>About Us</PageLinkStyle>
            </Link>
            <Link href={"/contact"}>
              <PageLinkStyle color="var(--grey-500, #525252)" $ispageactive={router.pathname === "/contact"}>Contact Us</PageLinkStyle>
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
              <PageLinkStyle color="var(--grey-500, #525252)" $ispageactive={false}>Profile</PageLinkStyle>
            </Link>
          </div>
        </div>
        <div className="two">
        <Link href={"#"}>
              <PageLinkStyle color="var(--red, #D92D20)" $ispageactive={false}>Logout</PageLinkStyle>
            </Link>
        </div>
      </motion.div>
    </MobileNavStyles>
  );
};

export default MobileNav;
