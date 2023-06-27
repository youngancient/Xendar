import { FooterPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FooterStyles } from "@/styles/FooterStyles/Footer";

const Footer: FunctionComponent = () => {
  return (
    <FooterStyles>
      <FooterPaddedSectionStyle>
        <div className="one">
          <div className="icons">
            <Link href={"/"}>
              <Image
                src={"/assets/logo-one.png"}
                alt="vephla logo"
                width={82}
                height={40}
              />
            </Link>
          </div>
          <div className="pane">
            <h4>Company</h4>
            <div className="links">
              <Link href={"/courses"}>
                <LinkStyle color="#fff" hovercolor="#fff">
                  Courses
                </LinkStyle>
              </Link>
              <Link href={"/about"}>
                <LinkStyle color="#fff" hovercolor="#fff">
                  About Us
                </LinkStyle>
              </Link>
              <Link href={"/contact"}>
                <LinkStyle color="#fff" hovercolor="#fff">
                  Contact Us
                </LinkStyle>
              </Link>
            </div>
          </div>
          <div className="pane">
            <h4>Community</h4>
            <div className="links">
              <Link href={"#"}>
                <LinkStyle color="#fff" hovercolor="#fff">
                  Scholarships
                </LinkStyle>
              </Link>
              <Link href={"#"}>
                <LinkStyle color="#fff" hovercolor="#fff">
                  Refer a Friend
                </LinkStyle>
              </Link>
              <Link href={"#"}>
                <LinkStyle color="#fff" hovercolor="#fff">
                  Free Classes
                </LinkStyle>
              </Link>
            </div>
          </div>
          <div className="pane">
            <h4>Teaching</h4>
            <div className="links">
              <Link href={"#"}>
                <LinkStyle color="#fff" hovercolor="#fff">
                  Become a Tutor
                </LinkStyle>
              </Link>
              <Link href={"#"}>
                <LinkStyle color="#fff" hovercolor="#fff">
                  Tutor Help Centre
                </LinkStyle>
              </Link>
            </div>
          </div>
        </div>
        <div className="two">
          <p>2022 Mike & Jude Services. All Rights Reserved</p>
          <div className="flat">
            <Link href={"#"}>
              <LinkStyle color="#fff" hovercolor="#fff">
                Privacy Policy
              </LinkStyle>
            </Link>
            <Link href={"#"}>
              <LinkStyle color="#fff" hovercolor="#fff">
                Terms and Conditions
              </LinkStyle>
            </Link>
          </div>
        </div>
      </FooterPaddedSectionStyle>
    </FooterStyles>
  );
};

export default Footer;
