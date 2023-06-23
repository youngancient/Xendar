import { HeaderStyle } from "@/styles/HeaderStyles/Header";
import Image from "next/image";
import Link from "next/link";
import { Heart, MagnifyingGlass, Menu, Notification } from "../Icons/Icons";
import Search from "./Search";
import React, { FunctionComponent, useEffect } from "react";
import { PageLinkStyle } from "@/styles/LinkStyles/Link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { closeNav, toggleNav } from "@/redux/dataSlice";
import { useRouter } from "next/router";

// configure the visited states, set the mobile nav well
const Header: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const toggleMenu =()=>{
    dispatch(toggleNav());
  }
  useEffect(()=>{
    dispatch(closeNav());
  });
  const router = useRouter();
  return (
    <HeaderStyle>
      <div className="logo">
      <Link href={"/"}>     
        <Image
          src={"/assets/logo-two.png"}
          alt="vephla logo"
          width={82}
          height={40}
        />
        </Link>
      </div>
      <div className="desktop desktop-nav-links">
        <Link href={"/courses"}>
          <PageLinkStyle color="var(--grey-500, #525252)" ispageactive={router.pathname === "/courses"}>Courses</PageLinkStyle>
        </Link>
        <Link href={"/about"}>
          <PageLinkStyle color="var(--grey-500, #525252)" ispageactive={router.pathname === "/about"}>About Us</PageLinkStyle>
        </Link>
        <Link href={"/contact"}>
          <PageLinkStyle color="var(--grey-500, #525252)" ispageactive={router.pathname === "/contact"}>Contact Us</PageLinkStyle>
        </Link>
      </div>
      <div className="desktop">
        <Search />
      </div>
      <div className="desktop icons-group">
        <div className="icons">
          <Heart />
          <Notification />
        </div>
        <Image
          src={"/assets/nav_avatar.png"}
          alt={"nav avatar"}
          width={40}
          height={40}
        />
      </div>

      <div className="mobile mobile-nav-links">
        <MagnifyingGlass />
        <Menu toggleMenu={toggleMenu} />
      </div>
    </HeaderStyle>
  );
};

export default Header;
