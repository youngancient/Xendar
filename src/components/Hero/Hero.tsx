import { DesktopMobile, HeroStyles, TabOnly } from "@/styles/HeroStyles/Hero";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import HeroSearch from "./HeroSearch";
import Link from "next/link";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero: FunctionComponent = () => {
  const [text] = useTypewriter({
    words: ["Start", "Begin"],
    loop: true,
    typeSpeed: 100,
  });
  return (
    <DesktopMobile>
      <HeroStyles>
        <div className="hero-text">
          <h1>
            Let’s help you <strong>{text} <span><Cursor cursorColor="#531989" /></span></strong> <br />
            your career in <strong>Tech</strong>
          </h1>
          <p className="hero-p">
            Vephla is an E-Learning organization that specializes in helping
            people kickstart their journey into the evolving world of technology
          </p>
          <HeroSearch />
          <div className="alink">
            <Link href={"/courses"}>
              <LinkStyle color="var(--purple, #7d26cd)">
                View Our Courses
              </LinkStyle>
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <TabOnly>
            <Image
              alt="hero img"
              src="/assets/hero.png"
              width={700}
              height={500}
              className="desktop"
            />
            <Image
              alt="hero img"
              src="/assets/hero_mobile.png"
              width={400}
              height={300}
              className="tab"
            />
            <Image
              alt="hero img"
              src="/assets/hero_mobile.png"
              width={0}
              height={0}
              sizes="100vw"
              priority={true}               
              className="mobile mobile-img"
            />
          </TabOnly>
        </div>
      </HeroStyles>
    </DesktopMobile>
  );
};

export default Hero;
