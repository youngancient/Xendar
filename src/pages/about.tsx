import { AboutHero, Team } from "@/components/Aboutpage/AboutPage";
import { Chooseus } from "@/components/HomepageComp/Chooseus";
import Cta from "@/components/HomepageComp/Cta";
import SocialsComp from "@/components/Socials/Socials";
import React, { FunctionComponent } from "react";
import Head from "next/head";

const About: FunctionComponent = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Xendar | About</title>
      </Head>
      <AboutHero />
      <Chooseus />
      <Team />
      <Cta />
      <SocialsComp />
    </>
  );
};

export default About;
