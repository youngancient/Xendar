import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent } from "react";
import SectionHead from "../SectionHead/SectionHead";
import Link from "next/link";
import { SocialLinkStyle } from "@/styles/LinkStyles/Link";
import { ColorInstagram, ColorTwitter } from "../Icons/Icons";
import { SocialsCompStyles } from "@/styles/AboutpageStyles/Aboutpage";

const SocialsComp: FunctionComponent = () => {
  return (
    <SocialsCompStyles>
      <ActualPaddedSectionStyle>
        <SectionHead
          bigtext="Follow Us"
          smalltext="You can also reach out to us via our social media pages."
        />
        <div className="s-media">
          <div className="pad">
            <Link href={"#"}>
              <div className="a">
                <div className="a-link">
                  <ColorInstagram />
                  <SocialLinkStyle color="var(--grey-500, #525252)">Vephla.ng</SocialLinkStyle>
                </div>
              </div>
            </Link>
          </div>
          <div className="pad">
            <Link href={"#"}>
              <div className="a">
                <div className="a-link">
                  <ColorTwitter />
                  <SocialLinkStyle color="var(--grey-500, #525252)">VephlaHQ</SocialLinkStyle>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </ActualPaddedSectionStyle>
    </SocialsCompStyles>
  );
};

export default SocialsComp;
