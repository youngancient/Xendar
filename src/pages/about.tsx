import { Chooseus } from "@/components/HomepageComp/Chooseus";
import Cta from "@/components/HomepageComp/Cta";
import SocialsComp from "@/components/Socials/Socials";
import React, { FunctionComponent } from "react";


const About:FunctionComponent = () => {
    return ( 
        <>
            <p>hero</p>
            <Chooseus />
            <p>teams</p>
            <Cta />
            <SocialsComp />
        </>
     );
}
 
export default About;