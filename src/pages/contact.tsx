import ContactComp from "@/components/Contactpage/Contact";
import ReachOut from "@/components/Contactpage/Reachout";
import SocialsComp from "@/components/Socials/Socials";
import React, { FunctionComponent } from "react";


const Contact:FunctionComponent = () => {
    return ( 
        <>
            <ContactComp />
            <ReachOut />
            <SocialsComp />
        </>
     );
}
 
export default Contact;