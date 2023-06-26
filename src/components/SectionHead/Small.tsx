import { SmallStyles } from "@/styles/SectionHeadStyles/Small";
import React, { FunctionComponent } from "react";

export interface ISmall{
    text : string;
}
const Small:FunctionComponent<ISmall> = ({text}) => {
    return ( 
        <SmallStyles>
            {text}
        </SmallStyles>
     );
}
 
export default Small;