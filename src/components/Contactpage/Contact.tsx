import { ContactStyles } from "@/styles/ContactpageStyles/Contact";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent } from "react";
import SectionHead from "../SectionHead/SectionHead";

const ContactComp: FunctionComponent = () => {
  return (
    <ContactStyles>
      <ActualPaddedSectionStyle>
        <SectionHead
          bigtext="Send Us A Message"
          smalltext="Feel free to send us a direct message from our website. We’ll respond to you as fast as we can."
        />
        contact form here o
      </ActualPaddedSectionStyle>
    </ContactStyles>
  );
};

export default ContactComp;
