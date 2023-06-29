
import { AboutHero, Team } from "@/components/Aboutpage/AboutPage";
import { Chooseus } from "@/components/HomepageComp/Chooseus";
import Cta from "@/components/HomepageComp/Cta";
import SocialsComp from "@/components/Socials/Socials";
import React, { FunctionComponent } from "react";


const About:FunctionComponent = () => {
    return ( 
        <>
            <AboutHero />
            <Chooseus />
            <Team />
            <Cta />
            <SocialsComp />
        </>
     );
}
 
export default About;