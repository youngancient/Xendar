import { reasonVariants } from "@/Animations/LandingPageVariants";
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const CourseCardStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  whileInView : "final",
  viewport : {once : true},
  variants : reasonVariants}))`
  border-radius: 11.774px;
  background: var(--white, #fff);
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
  width : 164px;
  height: 100%;
  .img {
    border-radius: 11.774px 11.774px 0px 0px;
  }
  .content {
    padding: 0.375rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .prices {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .icons {
    font-family: Poppins;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .icons-inner {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  .i {
    display: flex;
    gap: 0.25rem;
    align-items: center;
  }
  .emoji {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 8px;
    background: var(--background-white, #f5f5f5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .msg {
    position: absolute;
    top: 60%;
    left: 75%;
    width: fit-content;
    width: 75px;
    border-radius: 8px;
    background: var(--off-white, #fefefe);
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
    display : flex;
    justify-content: center;
    align-items: center;
  }
  .msg span{
    color: var(--grey-500, #525252);
    font-size: 0.5rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  h4 {
    color: var(--grey-500, #525252);
    font-size: 0.875rem;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 1rem;
    word-break: break-all;
  }
  .prices span {
    color: var(--grey-300, #979797);
    font-size: 0.5rem;
    font-family: Poppins;
    line-height: 0.75rem;
  }
  .content-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .i span {
    color: var(--grey-400, #747474);
    font-size: 0.5rem;
    font-family: Poppins;
    line-height: 0.75rem;
    font-weight: 700;
    margin-top: 1px;
  }
  hr {
    border: 0.046rem solid #e5d4f5;
  }
  @media screen and (min-width: 728px) {
    width: 230px;
    .content {
      padding: 0.75rem 1rem;
      gap: 0.75rem;
    }
    .emoji {
      width: 2rem;
      height: 2rem;
    }
    .msg{
      width: 110px;
      padding: 1px;
      top: 100%;
      left: 76%;
    }
    .msg span{
      font-size: 0.75rem;
    }
    h4 {
      font-size: 1rem;
      line-height: 1.5rem;
    }
    .prices span,
    .i span {
      font-size: 0.75rem;
      font-family: DM Sans;
      line-height: 1.5rem;
    }
    .i span{
      margin-top: 0px;
    }
    .icons {
      font-family: DM Sans;
    }
  }
  @media screen and (min-width: 998px) {
    width: auto;
  }
`;
