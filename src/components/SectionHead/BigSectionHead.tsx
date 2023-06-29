import { BigSectionHeadStyles, SectionHeadStyles } from "@/styles/SectionHeadStyles/SectionHead";
import React, { FunctionComponent } from "react";
import Small from "./Small";
import { ISectionHead } from "./SectionHead";


export const BigSectionHead:FunctionComponent<ISectionHead> = ({bigtext, smalltext}) => {
    return ( 
        <BigSectionHeadStyles>
            <h3>{bigtext}</h3>
            <Small text={smalltext} />
        </BigSectionHeadStyles>
     );
}
 