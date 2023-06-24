import { styled } from "styled-components";
import { motion } from "framer-motion";
import { menuvariants } from "../../Animations/LandingPageVariants";


export const MobileNavStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate : "final",
  exit : "exit",
  variants : menuvariants}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh;
  display: grid;
  z-index : 10;
  grid-template-columns: 40% 60%;
  background : 	hsla(0, 0%, 18%, 0.5);
  .one{
    display : flex;
    flex-direction : column;
    gap : 1.5rem;
  }
  h5 {
    color: #000;
    font-size: 0.875rem;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 1.5rem;
  }
  .nothing {
  }
  .sidemenu {
    background: var(--background-white, #f5f5f5);
    padding : 1.5rem 1.5rem 3rem 1rem;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
  }
  .sidemenu-links{
    display : flex;
    flex-direction : column;
    gap :1rem;
  }
`;
