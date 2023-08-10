import { ContactComp } from "@/components/Contactpage/Contact";
import { ReachOut } from "@/components/Contactpage/Reachout";
import SocialsComp from "@/components/Socials/Socials";
import React, { FunctionComponent } from "react";
import Head from "next/head";

const Contact: FunctionComponent = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Xendar | Contact</title>
      </Head>
      <ContactComp />
      <ReachOut />
      <SocialsComp />
    </>
  );
};

export default Contact;
