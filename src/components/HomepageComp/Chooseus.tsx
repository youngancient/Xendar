import { ChooseusStyles, ReasonStyles } from "@/styles/HomepageStyles/Homepage";
import React, { FunctionComponent, useState } from "react";
import SectionHead from "../SectionHead/SectionHead";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { Reasons } from "@/Constant/constant";
import Image from "next/image";


export const Chooseus:FunctionComponent = () => {
    const [reasons, setReasons] = useState(Reasons);
    return ( 
        <ChooseusStyles>
            <SectionHead bigtext="Why Choose Us?" smalltext="Check out what some of our past and present students are saying" />
            <ActualPaddedSectionStyle>
                <div className="reasons">
                    {reasons.map((ele, index)=>(
                        <Reason key={index} img={ele.img} head={ele.head} text={ele.text} />
                    ))}
                </div>
            </ActualPaddedSectionStyle>
        </ChooseusStyles>
     );
}
 
export interface IReason {
    img: string;
    head: string;
    text: string;
  }
export const Reason:FunctionComponent<IReason>= ({img, head, text}) => {
    return ( 
        <ReasonStyles>
            <Image src={img} width={70} height={70} alt={head} />
            <div className="ele">
                <h4>{head}</h4>
                <p>{text}</p>
            </div>
        </ReasonStyles>
     );
}
 