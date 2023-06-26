import { DesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import Link from "next/link";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { WelcomeStyles } from "@/styles/HomepageStyles/Homepage";

const Welcome: FunctionComponent = () => {
  return (
    <DesktopMobile>
      <WelcomeStyles>
        <div className="desktop">
          <ActualPaddedSectionStyle>
            <div className="welcome">
              <div className="one img-cont">
                <TabOnly>
                  <Image
                    src="/assets/welcome.png"
                    alt="welcome"
                    width={475.544}
                    height={369.739}
                    className="desktop"
                  />
                  <Image
                    src="/assets/welcome.png"
                    alt="welcome"
                    width={380}
                    height={300}
                    className="tab fill-img"
                  />
                </TabOnly>
              </div>
              <div className="one">
                <div className="texts">
                  <h3>Welcome to Vephla’s E-learning Website</h3>
                  <p className="small">
                    In Vephla, we guide you with the best available teaching and
                    mentoring needed in your tech career and also give you the
                    necessary resources to get better.{" "}
                  </p>
                  <Link href={"/courses"}>
                    <LinkStyle color="var(--purple, #7d26cd)">
                      Get Started
                    </LinkStyle>
                  </Link>
                </div>
              </div>
            </div>
          </ActualPaddedSectionStyle>
        </div>
        <div className="mobile">
          <ActualPaddedSectionStyle>
            <div className="welcome">
              <h3>Welcome to Vephla’s E-learning Website</h3>
              <Image
                src="/assets/welcome-mobile.png"
                alt="welcome"
                width={0}
                height={0}
                sizes="100vw"
                className="fill-img mobile"
              />
              <p className="small">
                In Vephla, we guide you with the best available teaching and
                mentoring needed in your tech career and also give you the
                necessary resources to get better.{" "}
              </p>
              <Link href={"/courses"}>
                <LinkStyle color="var(--purple, #7d26cd)">
                  Get Started
                </LinkStyle>
              </Link>
            </div>
          </ActualPaddedSectionStyle>
        </div>
      </WelcomeStyles>
    </DesktopMobile>
  );
};

export default Welcome;
