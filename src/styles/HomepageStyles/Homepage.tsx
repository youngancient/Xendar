import { css, styled } from "styled-components";
import { HeroSearchStyles } from "../HeroStyles/HeroSearch";
import { motion } from "framer-motion";
import { reasonVariants } from "@/Animations/LandingPageVariants";

// welcome comp
export const WelcomeStyles = styled.div`
  img {
    border-radius: 1rem;
  }
  margin-top: 2.5rem;
  .fill-img {
    width: 100%;
    height: auto;
  }
  .mobile {
    margin-top: 0.5rem;
  }
  .welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  h3 {
    color: var(--grey-700, #272727);
    font-size: 2rem;
    font-family: Raleway;
    font-weight: 700;
    line-height: 3rem;
    text-align: center;
  }
  .small {
    color: var(--grey-500, #525252);
    font-size: 0.875rem;
    font-family: DM Sans;
    line-height: 1.5rem;
    text-align: center;
  }
  @media screen and (min-width: 728px) {
    .welcome {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 3rem;
    }
    h3 {
      font-size: 2rem;
      line-height: 2.5rem;
      text-align: left;
    }
    .small {
      font-size: 1rem;
      text-align: left;
    }
    .one {
      width: 50%;
    }
    .texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.75rem;
    }
  }
  @media screen and (min-width: 998px) {
    .welcome {
      flex-direction: row;
      gap: 10.25rem;
    }
    .img-cont {
      display: flex;
      justify-content: right;
    }
    h3 {
      font-size: 2.5rem;
      line-height: 3rem;
    }
    .texts {
      gap: 1.5rem;
      width: 70%;
    }
  }
`;

// choose us comp

export const ChooseusStyles = styled.div`
  margin-top: 2.5rem;
  .reasons {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media screen and (min-width: 490px) and (max-width: 690px) {
    .reasons {
      justify-content: space-evenly;
      gap: 2rem;
    }
  }
  @media screen and (min-width: 728px) {
    .reasons {
      gap: 2.5rem;
      justify-content: space-evenly;
    }
  }
  @media screen and (min-width: 728px) {
    .reasons {
      gap: 2.5rem;
      justify-content: space-evenly;
    }
  }
`;

export const ReasonStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  whileInView : "final",
  viewport : {once : true},
  // animate : "final",
  variants : reasonVariants}))`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 16px;
  background: var(--off-white, #fefefe);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  .ele {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h4 {
    color: var(--grey-700, #272727);
    font-size: 1.25rem;
    font-family: Raleway;
    font-weight: 700;
    line-height: 2rem;
    text-align: center;
  }
  p {
    color: var(--grey-500, #525252);
    text-align: center;
    font-size: 0.875rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  @media screen and (min-width: 490px) and (max-width: 690px) {
    width: 45%;
  }
  @media screen and (min-width: 728px) {
    gap: 3rem;
    width: 45%;
    .ele {
      gap: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 998px) {
    gap: 3rem;
    width: 30%;
  }
`;

export const TestimonialStyles = styled.div`
  margin-top: 0.5rem;
  background: var(--purple-100, #e5d4f5);
  .testimonies {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media screen and (min-width: 728px) {
    .testimonies {
      margin-top: 3rem;
      flex-direction: row;
      gap: 0rem;
    }
    padding-bottom: 4rem;
  }
`;

export interface ITestimonyStyle {
  $isActive: boolean;
}
export const TestimonyStyles = styled.div<ITestimonyStyle>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  .comment {
    display: flex;
    padding: 1.5rem 1rem;
    gap: 0.5rem;
    border-radius: 16px;
    background: var(--off-white, #fefefe);
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .comment p {
    color: var(--grey-500, #525252);
    font-size: 1rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  ${(props) =>
    props.$isActive &&
    css`
      .comment {
        background: var(--purple, #7d26cd);
      }
      .comment p {
        color: var(--off-white, #fefefe);
      }
    `}
  h4 {
    color: var(--grey-700, #272727);
    font-size: 0.875rem;
    font-family: DM Sans;
    font-weight: 700;
    line-height: 1.5rem;
  }
  span {
    color: var(--grey-500, #525252);
    font-size: 0.75rem;
    font-family: DM Sans;
    line-height: 1.5rem;
  }
  .below {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }
  @media screen and (min-width: 728px) {
    width: 33.3%;
    .comment {
      display: flex;
      padding: 1.5rem 1rem;
      align-items: flex-start;
      gap: 1rem;
      width: 95%;
    }
    transition: 0.5s ease-in-out;
    ${(props) =>
      props.$isActive &&
      css`
        transform: translateY(15%);
        transition: 0.5s ease-in-out;
      `}
  }
  @media screen and (min-width: 998px) {
    .comment {
      display: flex;
      padding: 2.5rem 1.5rem;
      align-items: flex-start;
      gap: 1rem;
      width: 95%;
    }
  }
`;

export const CtaStyles = styled.div`
  // display: flex;
  background: var(--purple-100, #e5d4f5) url("/assets/cta-bg1.png") no-repeat
    center;
  .pad {
    display: flex;
    justify-content: center;
  }
  .cta {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .a {
    display: flex;
    padding: 0.75rem 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: var(--purple, #7d26cd);
    box-shadow: 0px 4px 8px 0px rgba(125, 38, 205, 0.3);
    width: 100%;
  }
  .a:hover {
    background: var(--purple-600, #6820ab);
  }
  @media screen and (min-width: 490px) and (max-width: 690px) {
    .cta {
      gap: 0;
    }
  }
  @media screen and (min-width: 728px) {
    background: var(--purple-100, #e5d4f5) url("/assets/cta-bg2.png") no-repeat
      center;
    border-radius: 16px;
    .a {
      width: auto;
    }
  }
`;

export const NewsletterStyle = styled.div`
  .fl {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  form {
    width: 100%;
  }
  @media screen and (min-width: 728px) {
    form {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fl{
      gap: 2rem;
    }
  }
`;

export const SubscribeStyles = styled(HeroSearchStyles)`
  margin-top: 0;
  display: flex;
  input {
    padding: 1rem;
  }
  input:focus {
    border: 1px solid var(--grey-500, #525252);
  }
  @media screen and (min-width: 490px) and (max-width: 768px) {
    input {
      width: 14rem;
    }
  }
`;
