import { SectionHeadStyles } from "@/styles/SectionHeadStyles/SectionHead";
import React, { FunctionComponent } from "react";
import Small from "./Small";

export interface ISectionHead{
    bigtext : string;
    smalltext : string;
}
const SectionHead:FunctionComponent<ISectionHead> = ({bigtext, smalltext}) => {
    return ( 
        <SectionHeadStyles>
            <h3>{bigtext}</h3>
            <Small text={smalltext} />
        </SectionHeadStyles>
     );
}
 
export default SectionHead;