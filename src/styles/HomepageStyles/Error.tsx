import { switchEleVariants } from "@/Animations/LandingPageVariants";
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ErrorCompStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: switchEleVariants,
}))`
  padding: 1rem 2rem 1rem 2rem;
`;
export const PageErrorStyles = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
