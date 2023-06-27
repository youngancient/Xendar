import { NewsletterStyle } from "@/styles/HomepageStyles/Homepage";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent } from "react";
import SectionHead from "../SectionHead/SectionHead";
import { CenterItemStyle } from "@/styles/HeroStyles/CenterItem";
import SubscribeComp from "./SubscribeComp";

const Newsletter: FunctionComponent = () => {
  return (
    <NewsletterStyle>
      <ActualPaddedSectionStyle>
        <CenterItemStyle>
          <SectionHead
            bigtext="Newsletter"
            smalltext="Subscribe to our newsletter to get important and industry leading updates on new courses we offer and also huge discounts on some of our courses"
          />
        </CenterItemStyle>
        <SubscribeComp />
      </ActualPaddedSectionStyle>
    </NewsletterStyle>
  );
};

export default Newsletter;
