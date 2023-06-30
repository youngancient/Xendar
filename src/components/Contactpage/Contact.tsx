import {
  ContactStyles,
  FormLabelStyles,
  InputStyles,
  TextareaStyles,
} from "@/styles/ContactpageStyles/Contact";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent } from "react";
import SectionHead from "../SectionHead/SectionHead";
import { DesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
import Image from "next/image";

export const ContactComp: FunctionComponent = () => {
  return (
    <ContactStyles>
      <SectionHead
        bigtext="Send Us A Message"
        smalltext="Feel free to send us a direct message from our website. We’ll respond to you as fast as we can."
      />
      <ActualPaddedSectionStyle>
        <div className="main">
          <div className="img">
            <DesktopMobile>
              <TabOnly>
                <Image
                  alt="hero img"
                  src="/assets/contact.png"
                  width={500}
                  height={640}
                  className="desktop"
                />
                <Image
                  alt="hero img"
                  src="/assets/contact.png"
                  width={400}
                  height={300}
                  className="tab"
                />
              </TabOnly>
            </DesktopMobile>
          </div>
          <form>
            <div className="form-ele">
              <FormLabelStyles>
                <label htmlFor="name">Full Name</label>
              </FormLabelStyles>
              <InputStyles>
                <input type="text" name="name" id="" />
              </InputStyles>
            </div>
            <div className="form-ele">
              <FormLabelStyles>
                <label htmlFor="email">Email Address</label>
              </FormLabelStyles>
              <InputStyles>
                <input type="email" name="email" id="" />
              </InputStyles>
            </div>
            <div className="form-ele">
              <FormLabelStyles>
                <label htmlFor="subject">Subject</label>
              </FormLabelStyles>
              <InputStyles>
                <input type="text" name="subject" id="" />
              </InputStyles>
            </div>
            <div className="form-ele">
              <FormLabelStyles>
                <label htmlFor="msg">Message</label>
              </FormLabelStyles>
              <TextareaStyles>
              <textarea> </textarea>
              </TextareaStyles>
            </div>
          </form>
        </div>
      </ActualPaddedSectionStyle>
    </ContactStyles>
  );
};
