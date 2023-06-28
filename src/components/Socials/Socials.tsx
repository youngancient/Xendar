import { SocialsCompStyles } from "@/styles/CoursepageStyles/Coursepage";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent } from "react";
import SectionHead from "../SectionHead/SectionHead";
import Link from "next/link";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import { ColorInstagram, ColorTwitter } from "../Icons/Icons";

const SocialsComp: FunctionComponent = () => {
  return (
    <SocialsCompStyles>
      <ActualPaddedSectionStyle>
        <SectionHead
          bigtext="Follow Us"
          smalltext="You can also reach out to us via our social media pages."
        />
        <div className="smedia">
          <div className="pad">
            <Link href={"/courses"}>
              <div className="a">
                <LinkStyle color="var(--grey-500, #525252)" >
                  <ColorInstagram />
                  <span>Vephla.ng</span>
                </LinkStyle>
              </div>
            </Link>
          </div>
          <div className="pad">
            <Link href={"/courses"}>
              <div className="a">
                <LinkStyle color="var(--grey-500, #525252)" >
                    <span>VephlaHQ</span>
                  <ColorTwitter/>
                </LinkStyle>
              </div>
            </Link>
          </div>
        </div>
      </ActualPaddedSectionStyle>
    </SocialsCompStyles>
  );
};

export default SocialsComp;
