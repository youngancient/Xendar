import { FunctionComponent } from "react";
import SectionHead from "../SectionHead/SectionHead";
import {
  ReachoutCompStyles,
  ReachoutStyles,
} from "@/styles/ContactpageStyles/Contact";
import { Contacts } from "@/Constant/constant";
import { ContactSvg } from "../Icons/Icons";
import { ContactBtnStyles } from "@/styles/ButtonStyles/ButtonGroup";
import { XtraSmall } from "@/styles/SectionHeadStyles/Small";
import { ReachoutSectionStyle } from "@/styles/HomepageStyles/Section";

export interface IReachout {
  name: string;
  note: string;
  deet: string;
  svg: string;
  link: string;
}
export const ReachOut: FunctionComponent = () => {
  return (
    <ReachoutStyles>
      <SectionHead
        bigtext="Reach Out To Us"
        smalltext="If you have questions, are looking for assistance, or you just want to share your feedback with us, 
        we’re listening. "
      />
      <ReachoutSectionStyle>
        <div className="contacts">
          {Contacts.map((ele, index) => (
            <ReachoutComp
              name={ele.name}
              note={ele.note}
              key={index}
              deet={ele.deet}
              svg={ele.svg}
              link={ele.link}
            />
          ))}
        </div>
      </ReachoutSectionStyle>
    </ReachoutStyles>
  );
};

export const ReachoutComp: FunctionComponent<IReachout> = ({
  name,
  note,
  deet,
  svg,
  link,
}) => {
  return (
    <ReachoutCompStyles>
      <ContactSvg svg={svg} />
      <div className="ct">
        <h4>{name}</h4>
        <XtraSmall>{note}</XtraSmall>
      </div>
      <ContactBtn svg={svg} link={link} deet={deet} />
    </ReachoutCompStyles>
  );
};

export interface IContactBtn {
  svg: string;
  link: string;
  deet: string;
}
export const ContactBtn: FunctionComponent<IContactBtn> = ({
  svg,
  link,
  deet,
}) => {
  const handleNav = () => {
    if (svg === "email") {
      window.location.href = `mailto:${link}`;
    } else if (svg === "phone") {
      window.location.href = `tel:${link}`;
    } else if (svg === "location") {
      window.open(`${link}`);
    }
  };
  return (
    <ContactBtnStyles onClick={handleNav}>
      <h5>{deet}</h5>
    </ContactBtnStyles>
  );
};
