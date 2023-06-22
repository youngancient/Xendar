import { HeaderStyle } from "@/styles/HeaderStyles/Header";
import Image from "next/image";
import Link from "next/link";
import { Heart, MagnifyingGlass, Menu, Notification } from "../Icons/Icons";
import Search from "./Search";
import React, { FunctionComponent } from "react";
import { LinkStyle } from "@/styles/LinkStyles/Link";

const Header: FunctionComponent = () => {
  return (
    <HeaderStyle>
      <div className="logo">
        <Image
          src={"/assets/logo-two.png"}
          alt="vephla logo"
          width={82}
          height={40}
        />
      </div>
      <div className="desktop desktop-nav-links">
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
        <Menu />
      </div>
    </HeaderStyle>
  );
};

export default Header;
