import { DesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import {
  AboutHeroStyles,
  TeamMemberStyles,
  TeamStyle,
  TeamTabOnly,
} from "@/styles/AboutpageStyles/Aboutpage";
import SectionHead from "../SectionHead/SectionHead";
import { TeamMembers } from "@/Constant/constant";
import { SmallNoMargin, XtraSmall } from "@/styles/SectionHeadStyles/Small";

export const AboutHero: FunctionComponent = () => {
  return (
    <DesktopMobile>
      <AboutHeroStyles>
        <div className="behind desktop"></div>
        <ActualPaddedSectionStyle>
          <div className="main">
            <div className="hero-text">
              <h1>
                Welcome to <strong>Vephla’s</strong> E-learning Website
              </h1>
              <p className="desktop hero-p">
                In Vephla, we guide you with the best available teaching and
                mentoring needed in your tech career and also give you the
                necessary resources to get better.{" "}
              </p>
              <div className="desktop">
                <div className="action">
                  <Link href={"/courses"}>
                    <LinkStyle color="var(--purple, #7d26cd)">
                      View Our Courses
                    </LinkStyle>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-img">
              <TabOnly>
                <Image
                  alt="hero img"
                  src="/assets/experts.png"
                  width={517.695}
                  height={402.511}
                  priority={true}
                  className="desktop"
                />
                <Image
                  alt="hero img"
                  src="/assets/experts.png"
                  width={350}
                  height={250}
                  priority={true}
                  className="tab"
                />
                <Image
                  alt="hero img"
                  src="/assets/experts.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={true}
                  className="mobile mobile-img"
                />
              </TabOnly>
            </div>
            <p className="mobile hero-p">
              In Vephla, we guide you with the best available teaching and
              mentoring needed in your tech career and also give you the
              necessary resources to get better.{" "}
            </p>
            <div className="mobile">
              <div className="action">
                <Link href={"/courses"}>
                  <LinkStyle color="var(--purple, #7d26cd)">
                    View Our Courses
                  </LinkStyle>
                </Link>
              </div>
            </div>
          </div>
        </ActualPaddedSectionStyle>
      </AboutHeroStyles>
    </DesktopMobile>
  );
};

export interface ITeamMember {
  image: string;
  name: string;
  post: string;
  desc: string;
}

export const TeamMemberComp: FunctionComponent<ITeamMember> = ({
  name,
  post,
  image,
  desc,
}) => {
  return (
    <TeamMemberStyles>
        <TeamTabOnly>
          <Image
            alt={name}
            src={image}
            width={384}
            height={456}
            className="desktop"
          />
          <Image
            alt={name}
            src={image}
            width={384}
            height={456}
            className="tab"
          />
          <Image
            alt={name}
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className="mobile mobile-img"
          />
        </TeamTabOnly>
      <div className="deet">
        <h4>{name}</h4>
        <XtraSmall>{post}</XtraSmall>
      </div>
      <SmallNoMargin>{desc}</SmallNoMargin>
    </TeamMemberStyles>
  );
};

export const Team: FunctionComponent = () => {
  return (
    <>
      <TeamStyle>
        <SectionHead
          bigtext="Meet Our Team"
          smalltext="Meet the brilliant minds behind this brilliant platform"
        />
        <ActualPaddedSectionStyle>
          <div className="team">
            {TeamMembers.map((ele, index) => (
              <TeamMemberComp
                key={index}
                name={ele.name}
                image={ele.image}
                post={ele.post}
                desc={ele.desc}
              />
            ))}
          </div>
        </ActualPaddedSectionStyle>
      </TeamStyle>
    </>
  );
};
