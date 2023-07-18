import {
  OverlayVariants,
  PaymentFormVariants,
} from "@/Animations/PaymentVariants";
import { IRadioBtnStyleProp } from "@/components/Payments/Payments";
import { motion } from "framer-motion";
import { css, styled } from "styled-components";

export const StepCompStyles = styled.div<IStepStyle>`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  .line {
    width: 35%;
    top: 30%;
    height: 0.1875rem;
    position: absolute;
    background: #d4b7ee;
    z-index: 0;
    ${(props) =>
      props.$isSelected &&
      css`
        background: #7d26cd;
      `}
  }
`;

interface IStepStyle {
  $isSelected: boolean;
  $isDoneWithOne?: boolean;
}

export const StepStyles = styled.div<IStepStyle>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .circle {
    z-index: 5;
    display: flex;
    border-radius: 3.75rem;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-family: DM Sans;
    color: var(--purple-200, #d4b7ee);
    border: 3px solid var(--purple-200, #d4b7ee);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    background: #fff;
    line-height: 1.5rem;
    ${(props) =>
      props.$isSelected &&
      css`
        border: 3px solid var(--grey-700, #272727);
        color: var(--grey-700, #272727);
      `}
    ${(props) =>
      props.$isDoneWithOne &&
      css`
        border: 3px solid var(--purple, #7d26cd);
      `}
  }
`;

export const PaymentCompStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: OverlayVariants,
}))`
  background: hsla(0, 0%, 4%, 0.75);
  position: fixed;
  left: 50%;
  top: 50%;
  height: 100vh;
  width: 100vw;
  margin-left: -50vw;
  margin-top: -50vh;
  z-index: 20;
  transition: 0.5s;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .formref {
    width: 100%;
  }
  @media screen and (min-width: 490px) {
    align-items: center;
    .formref {
      width: 80%;
    }
  }
  @media screen and (min-width: 728px) {
    align-items: center;
    .formref {
      width: 70%;
    }
  }
  @media screen and (min-width: 998px) {
    .formref {
      width: 32%;
    }
  }
`;

export const PaymentFormStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: PaymentFormVariants,
}))`
  border-radius: 1rem 1rem 0rem 0rem;
  background: var(--off-white, #fefefe);
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .form-ele,
  form {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
  }
  form {
    gap: 1rem;
  }
  min-height: 65vh;
  .section-name {
    color: var(--grey-300, #979797);
    font-family: DM Sans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
  .section,
  .select-plan,
  .plans {
    gap: 0.25rem;
    display: flex;
    flex-direction: column;
  }
  .course,
  .amount {
    display: flex;
    justify-content: space-between;
  }
  .plans {
    gap: 0.75rem;
  }
  // some form2 styles
  .form-2 .section-name {
    color: var(--grey-400, #747474);
  }
  .xxx {
    margin-top: 1rem;
  }
  .amount {
    padding: 0rem 0.5rem 0.5rem 0.5rem;
  }
  .c {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  .c h4 {
    color: var(--grey-500, #525252);
    font-family: DM Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
  }
  .form-2 .side {
    display: flex;
    gap: 1rem;
  }
  .side .section {
    width: 50%;
  }
  .cards {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 490px) {
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    .section-name {
      font-size: 0.875rem;
    }
    .c h4 {
      font-size: 1.25rem;
    }
    .form-2 .side {
      gap: 2rem;
    }
    .cards {
      gap: 2rem;
      justify-content: unset;
    }
  }
  @media screen and (min-width: 490px) and (max-width: 728px) {
    min-height: 60vh;
  }
  @media screen and (min-width: 728px) and (max-width: 820px) {
    min-height: 50vh;
  }
`;

export const PlanStyles = styled.div<IRadioBtnStyleProp>`
  cursor: pointer;
  border-radius: 0.5rem;
  background: var(--off-white, #fefefe);
  padding: 0.5rem;
  box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.$isChecked &&
    css`
      box-shadow: 0px 0px 1px 2px var(--purple, #7d26cd);
    `}
  display: flex;
  justify-content: space-between;
  .a,
  .b {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }
  .inner {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  .b .inner {
    align-items: flex-end;
  }
`;

export const RadioBtnStyle = styled.div<IRadioBtnStyleProp>`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem;
  border-radius: 1.875rem;
  border: 2px solid var(--grey-300, #979797);
  background: var(--off-white, #fefefe);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  ${(props) =>
    props.$isChecked &&
    css`
      border: 2px solid var(--purple, #7d26cd);
      span {
        border-radius: 50%;
        background: var(--purple, #7d26cd);
        opacity: 1;
        transition: 0.25s;
      }
    `}
`;

interface ICardStyles {
  $isSelected: boolean;
}
export const CardStyles = styled.div<ICardStyles>`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    color: var(--grey-700, #272727);
    font-family: DM Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
  .fl {
    border-radius: 0.5rem;
    background: var(--off-white, #fefefe);
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    ${(props) =>
      props.$isSelected &&
      css`
        box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.1);
        transition: 0.1s;
      `}
  }
`;

export interface ILoaderStyle {
  size?: string;
}
export const LoaderStyle = styled.div<ILoaderStyle>`
  border-radius: 50%;
  width: 10.03219rem;
  height: 10.03219rem;
  border: 0.8rem solid #7d26cd;
  border-bottom: 0.8rem solid #7d26cd;
  border-right: 0.8rem solid #e5d4f5;
  border-top: 0.8rem solid transparent;
  animation: spin 0.75s linear infinite;
  ${(props) =>
    props.size == "small" &&
    css`
      width: 5rem;
      height: 5rem;
    `}
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const CompletionCompStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1.5rem;
  .loading,
  .one,
  .success,
  .two {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .loading {
    margin-top: 5rem;
  }
  .two p {
    text-align: center;
  }
`;
export const PaymentLinkStyles = styled.button`
  color: var(--purple, #7d26cd);
  text-align: center;
  font-family: DM Sans;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  background: transparent;
  line-height: 1.5rem;
`;
